import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import { handleCookies } from "../../logic";

import handleCredentials from "../../logic/handleCredentials";

const cookie = require("cookie");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { auth, username, password } = req.body;
      switch (auth) {
        case "log-in":
          const userCredentials: string | any = await handleCredentials(
            username,
            password
          );
          const refreshToken: string = sign(
            { id: userCredentials.id },
            process.env.REFRESH_SECRET,
            {
              expiresIn: "7d",
            }
          );
          const accessToken: string = sign(
            { id: userCredentials.id },
            process.env.ACCESS_SECRET,
            {
              expiresIn: "1d",
            }
          );
          userCredentials.id
            ? res.setHeader("Set-Cookie", [
                cookie.serialize("refresh-token", refreshToken, {
                  path: "/",
                  httpOnly: true,
                  maxAge: 3600 * 24 * 7,
                  sameSite: true,
                  secure: process.env.NODE_ENV === "development" ? false : true,
                }),
                cookie.serialize("access-token", accessToken, {
                  path: "/",
                  httpOnly: true,
                  sameSite: true,
                  maxAge: 60,
                  secure: process.env.NODE_ENV === "development" ? false : true,
                }),
              ])
            : null;
          return res.send(userCredentials);
        case "log-out":
          res.setHeader("Set-Cookie", [
            `refresh-token=foo; path=/; expires= expires=Thu, 01 Jan 1970 00:00:00 GMT`,
            `access-token=foo; path=/; expires= expires=Thu, 01 Jan 1970 00:00:00 GMT`,
          ]);

          return res.send(`{"message":"logout successful"}`);
      }
    } else {
      const cookieAuthUser = await handleCookies(req.cookies["refresh-token"]);
      if (cookieAuthUser.username) {
        const refreshToken: string = sign(
          { id: cookieAuthUser.id },
          process.env.REFRESH_SECRET,
          {
            expiresIn: "7d",
          }
        );
        const accessToken: string = sign(
          { id: cookieAuthUser.id },
          process.env.ACCESS_SECRET,
          {
            expiresIn: "1d",
          }
        );
        res.setHeader("Set-Cookie", [
          cookie.serialize("refresh-token", refreshToken, {
            path: "/",
            httpOnly: true,
            maxAge: 3600 * 24 * 7,
            sameSite: true,
            secure: process.env.NODE_ENV === "development" ? false : true,
          }),
          cookie.serialize("access-token", accessToken, {
            path: "/",
            httpOnly: true,
            sameSite: true,
            maxAge: 60,
            secure: process.env.NODE_ENV === "development" ? false : true,
          }),
        ]);
      }
      return res.send(cookieAuthUser);
    }

    return res.status(200).end("Handle Authentication");
  } catch (error) {
    return res.status(404).end("Can't access");
  } finally {
    return res.status(200).end("Handle Authentication");
  }
};

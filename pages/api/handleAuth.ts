import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
import { handleCookies } from "../../logic";
import handleCredentials from "../../logic/handleCredentials";

const cookie = require("cookie");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { method, username, password } = req.body;
      switch (method) {
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
          console.log(userCredentials);
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
                  maxAge: 3600 * 24,
                  secure: process.env.NODE_ENV === "development" ? false : true,
                }),
              ])
            : null;
          return res.send(userCredentials);
      }
    } else {
      console.log();
      const cookieAuth = await handleCookies(req.cookies["refresh-token"]);
      return res.send(cookieAuth);
    }

    return res.status(200).end("Handle Authentication");
  } catch (error) {
    return res.send(error);
  } finally {
    return res.status(200).end("Handle Authentication");
  }
};

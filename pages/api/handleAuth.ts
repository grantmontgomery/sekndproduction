import { NextApiRequest, NextApiResponse } from "next";
import { sign, verify } from "jsonwebtoken";
const bcrypt = require("bcrypt");
const db = require("../../lib/db");

const cookie = require("cookie");



export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { auth, username, password } = req.body;
      switch (auth) {
        case "log-in":
          const user: any[] = await db.query(
            `SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${username}"`
          );
          //////Check if any user is returned
          if (user.length === 0)
            return res.send(`{"message": "Username does not exist."}`);
          const correctPassword: boolean = await bcrypt.compare(
            password,
            user[0].password
          );
          ///////Check if password is correct
          if (!correctPassword)
            return res.send(`{"message": "Wrong password."}`);

          const refreshToken: string = sign(
            { id: user[0].id },
            process.env.REFRESH_SECRET,
            {
              expiresIn: "7d",
            }
          );
          const accessToken: string = sign(
            { id: user[0].id },
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

          return res.send(user[0]);

        case "log-out":
          res.setHeader("Set-Cookie", [
            `refresh-token=foo; path=/; expires= expires=Thu, 01 Jan 1970 00:00:00 GMT`,
            `access-token=foo; path=/; expires= expires=Thu, 01 Jan 1970 00:00:00 GMT`,
          ]);

          return res.send(`{"message":"logout successful"}`);
      }
    } else {
      const correctToken: any = verify(
        req.cookies["refresh-token"],
        process.env.REFRESH_SECRET
      );
      if (!correctToken.id)
        return res.send(`{"message": "Token is not valid."}`);
      const user: any[] = await db.query(
        `SELECT * FROM ${process.env.DB_TABLE} WHERE id = "${correctToken.id}"`
      );
      if (user.length === 0)
        return res.send(`{"message": "User does not exist"}`);

      const refreshToken: string = sign(
        { id: user[0].id },
        process.env.REFRESH_SECRET,
        {
          expiresIn: "7d",
        }
      );
      const accessToken: string = sign(
        { id: user[0].id },
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

      return res.send(user[0]);
    }

    return res.status(200).end("Handle Authentication");
  } catch (error) {
    return res.send(error);
  }
};

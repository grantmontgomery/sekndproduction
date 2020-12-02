import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";
const cookie = require("cookie");

const db = require("../../lib/db");
const bcrypt = require("bcrypt");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { username, name, password, email } = req.body;
      const sameUser: any[] = await db.query(
        `SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${username}"`
      );

      switch (sameUser.length) {
        case 0:
          const hashedPassword: string = await bcrypt.hash(password, 10);
          await db.query(
            `INSERT INTO ${process.env.DB_TABLE} (name, username, password) values("${name}", "${username}", "${hashedPassword}")`
          );
          const user = await db.query(
            `SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${username}"`
          );

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
              maxAge: 3600 * 24,
              secure: process.env.NODE_ENV === "development" ? false : true,
            }),
          ]);
          return res.send(user[0]);
        case 1:
          return res.send(`{"message":"Username already exists"}`);
        default:
          return res.send(`{"message":"Username already exists"}`);
      }
    }

    return res.status(200).end("Handle User");
  } catch (error) {
    return res.send(error);
  }
};

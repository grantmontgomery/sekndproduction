import { NextApiRequest, NextApiResponse } from "next";
import { sign, verify } from "jsonwebtoken";
import cookieParser from "cookie-parser";
const db = require("../../lib/db");
const cookie = require("cookie");
const bcrypt = require("bcrypt");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { method, username, password } = req.body;
      switch (method) {
        case "log-in":
          if (req.cookies["refresh-token"]) {
            const correctToken: string | object = verify(
              req.cookies["refresh-token"],
              process.env.SESSION_SECRET
            );
            return res.send(`{"coookie": "wrong cookie"}`);
          } else {
            console.log("testing password");
            const data: {
              id: number;
              name: string;
              username: string;
              password: string;
            } = await db.query(
              `SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${username}"`
            );
            const correctPassword: boolean = await bcrypt.compare(
              password,
              data[0].password
            );
            if (correctPassword) {
              res.setHeader("Set-Cookie", [
                cookie.serialize("refresh-token", "bruh", {
                  path: "/",
                  httpOnly: true,
                  maxAge: 3600 * 24 * 7,
                  sameSite: true,
                  secure: process.env.NODE_ENV === "development" ? false : true,
                }),
                cookie.serialize("access-token", "bruh", {
                  path: "/",
                  httpOnly: true,
                  sameSite: true,
                  maxAge: 3600 * 24,
                  secure: process.env.NODE_ENV === "development" ? false : true,
                }),
              ]);
              return res.send(data[0]);
            } else {
              return res.send(`{"message":"Incorrect password"}`);
            }
          }
      }
      return res.send(`{"test":"Test test"}`);
    }
    return res.status(200).end("Handle Authentication");
  } catch (error) {
    res.send(error);
  }
};

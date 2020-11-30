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
      console.log(req.body);
      // switch (method) {
      //   case "log-in":
      //     if (req.cookies["refresh-token"]) {
      //       const correctToken: string | object = verify(
      //         req.cookies["refresh-token"],
      //         process.env.SESSION_SECRET
      //       );
      //     } else {
      //       const data: {
      //         id: number;
      //         name: string;
      //         username: string;
      //         password: string;
      //       } = await db.query(
      //         `SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${username}"`
      //       );
      //       const correctPassword: boolean = await bcrypt.compare(
      //         password,
      //         data[0].password
      //       );
      //       if(correctPassword){
      //         res.setHeader("Set-Cookie", cookie.serialize("token", "bruh"))
      //         return res.send(data[0])
      //       }
      //       else{
      //         return res.send("Incorrect password")
      //       }

      //     }
      // }
      return res.send("Test test");
    }
    return res.status(200).end("Handle Authentication");
  } catch (error) {
    res.send(error);
  }
};

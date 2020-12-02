import { NextApiRequest, NextApiResponse } from "next";
const db = require("../../lib");
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
          return res.send(user);
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

import { NextApiRequest, NextApiResponse } from "next";

const db = require("../../lib/db");
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await db.query(`SELECT * FROM Users`);
    console.log(results);
    console.log(typeof results);
    return res.send(results);
  } catch (err) {
    return res.send(err);
  }
};

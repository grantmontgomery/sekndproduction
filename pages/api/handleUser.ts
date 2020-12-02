import { NextApiRequest, NextApiResponse } from "next";
const bcrypt = require("bcrypt");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      const { username, name, password, email } = req.body;
      const salt = await bcrypt.genSalt();
      const hashedPassword: string = await bcrypt.hash(password, salt);
    }
    return res.status(200).end("Handle User");
  } catch (error) {
    return res.send(error);
  }
};

import { NextApiRequest, NextApiResponse } from "next";
import { sign, verify } from "jsonwebtoken";
import cookieParser from "cookie-parser";
const db = require("../../lib/db");
const cookie = require("cookie");
const bcrypt = require("bcrypt");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
    }
    return res.status(200).end("Handle Authentication");
  } catch (error) {
    res.send(error);
  }
};

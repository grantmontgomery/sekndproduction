import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    console.log(req.body);
    res.send(200);
  }
  res.status(200).end("Hello World");
};

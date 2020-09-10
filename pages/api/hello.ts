import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    console.log(req.body);
    return res.status(200).end(req.body);
  }
  return res.status(200).end("Hello World");
};

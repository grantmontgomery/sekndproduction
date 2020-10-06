import cookie from "cookie";
import { NextApiRequest } from "next";

export function parseCookies(req: any) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

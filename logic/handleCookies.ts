import { verify } from "jsonwebtoken";
const db = require("../lib/db");

export default async function handleCookies(cookie: string): Promise<any> {
  try {
    const correctToken: any = verify(cookie, process.env.REFRESH_SECRET);
    const data: any[] = await db.query(
      `SELECT * FROM ${process.env.DB_TABLE} WHERE id = "${correctToken.id}"`
    );
    return data[0];
  } catch (error) {
    return error;
  }
}

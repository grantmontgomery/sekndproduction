import { verify } from "jsonwebtoken";
const db = require("../lib/db");

export default async function handleCookies(cookie: string): Promise<{}> {
  try {
    const correctToken: any = verify(cookie, process.env.REFRESH_SECRET);
    const data: {}[] = await db.query(
      `SELECT * FROM ${process.env.DB_TABLE} WHERE id = "${correctToken.id}"`
    );
    return data[0];
  } catch (error) {
    console.log(error);
    return error;
  }
}

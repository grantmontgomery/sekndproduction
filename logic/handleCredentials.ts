const bcrypt = require("bcrypt");
const db = require("../lib/db");

export default async function handleCredentials(
  username: string,
  password: string
): Promise<string | any> {
  try {
    const user: any[] = await db.query(
      `SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${username}"`
    );
    const correctPassword: boolean = await bcrypt.compare(
      password,
      user[0].password
    );
    if (user.length === 1 && correctPassword) {
      return user[0];
    } else {
      return `{"error": "Wrong username or password"}`;
    }
  } catch (error) {
    return error;
  }
}

import db from "../../lib/db";

export default async (res, req) => {
  try {
    const data = await db.query(
      `SELECT * FROM Users WHERE username = "test12345"`
    );
    console.log(data);
    return res.status(200).end("handle user");
  } catch (error) {
    res.send(error);
    return res.status(404).end("error");
  }
};

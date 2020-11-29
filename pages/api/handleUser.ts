import { NextApiRequest, NextApiResponse } from "next";

// async logInUser(parent, args, context, info) {
//       const data: {
//         id: number;
//         name: string;
//         username: string;
//         password: string;
//       } = await db.query(
//         `SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${args.username}"`
//       );

//       if (!data[0]) return "Wrong username";

//       try {
//         console.log(context.req.headers);
//         if (context.req.cookies["refresh-token"]) {
//           const correctToken: string | object = verify(
//             context.req.cookies["refresh-token"],
//             process.env.SESSION_SECRET
//           );
//         } else {
//           const correctPassword: boolean = await bcrypt.compare(
//             args.password,
//             data[0].password
//           );

//           if (correctPassword) {
//             const refreshToken = sign(
//               { id: data[0].id },
//               process.env.SESSION_SECRET,
//               { expiresIn: "7d" }
//             );

//             context.setHeaders.push({
//               key: "Set-Cookie",
//               value: cookie.serialize("refresh-token", refreshToken, {
//                 httpOnly: true,
//                 origin:
//                   process.env.NODE_ENV === "development"
//                     ? "http://localhost:3000"
//                     : "https://sekndproduction.vercel.app",
//                 path: "/",
//                 sameSite: "strict",
//               }),
//             });

// context.setCookies.push({
//   name: "refresh-token",
//   value: refreshToken,
//   options: {
//     httpOnly: true,
//     maxAge: 3600 * 24 * 7,
//     path: "/",
//     sameSite: true,
//     secure: true,
//     domain:
//       process.env.NODE_ENV === "development"
//         ? "http://localhost:3000/"
//         : "https://sekndproduction.vercel.app/",
//   },
// });

//     const OkPacket: {
//       fieldCount: number;
//       affectedRows: number;
//       insertId: number;
//       serverStatus: number;
//       warningCount: number;
//       message: string;
//       protocol41: boolean;
//       changedRows: number;
//     } = await db.query(`
//     INSERT INTO ${process.env.DB_TABLE} (name, username, password) values
//     ("${args.name}", "${args.username}", "${hashedPassword}")
//     `);

//     return OkPacket;
//   } catch (error) {
//     return error;
//   }
// },
// async deleteUser(parent, args, info) {
//   try {
//     const OkPacket: {
//       fieldCount: number;
//       affectedRows: number;
//       insertId: number;
//       serverStatus: number;
//       warningCount: number;
//       message: string;
//       protocol41: boolean;
//       changedRows: number;
//     } = await db.query(
//       `DELETE FROM ${process.env.DB_TABLE} WHERE name = "${args.name}"`
//     );

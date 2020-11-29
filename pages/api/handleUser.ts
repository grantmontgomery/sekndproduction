import { ApolloServer, gql } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "micro-cors";
import { sign, verify } from "jsonwebtoken";
import cookieParser from "cookie-parser";
const db = require("../../lib/db");
const cookie = require("cookie");
const httpHeadersPlugin = require("apollo-server-plugin-http-headers");

const bcrypt = require("bcrypt");

const typeDefs = gql`
  type Query {
    users: [User!]!
    testQuery(name: String!): User
    logInUser(username: String!, password: String!): User
  }

  type Mutation {
    addUser(name: String!, username: String!, password: String!): OkPacket!
    deleteUser(name: String!): OkPacket!
  }

  type OkPacket {
    fieldCount: Int
    affectedRows: Int!
    insertId: Int!
    serverStatus: Int!
    warningCount: Int!
    message: String
    protocol41: Boolean
    changedRows: Int!
  }

  type User {
    id: Int
    name: String
    username: String
    password: String
  }
`;

const resolvers = {
  Query: {
    async users(
      parent,
      args,
      info
    ): Promise<
      | string
      | { id?: number; name?: string; username?: string; password?: string }[]
    > {
      try {
        const data:
          | { id: number; name: string; username: string; password: string }[]
          | string = await db.query(`SELECT * from ${process.env.DB_TABLE}`);
        return data;
      } catch (error) {
        return error;
      }
    },
    async testQuery(parent, args, info) {
      try {
        const data: {
          id: number;
          name: string;
          username: string;
          password: string;
        } = await db.query(
          `SELECT * FROM ${process.env.DB_TABLE} WHERE name = "${args.name}"`
        );

        return data[0];
      } catch (error) {
        return error;
      }
    },
    async logInUser(parent, args, context, info) {
      const data: {
        id: number;
        name: string;
        username: string;
        password: string;
      } = await db.query(
        `SELECT * FROM ${process.env.DB_TABLE} WHERE username = "${args.username}"`
      );

      if (!data[0]) return "Wrong username";
      try {
        if (context.req.cookies["refresh-token"]) {
          const correctToken: string | object = verify(
            context.req.cookies["refresh-token"],
            process.env.SESSION_SECRET
          );
        } else {
          const correctPassword: boolean = await bcrypt.compare(
            args.password,
            data[0].password
          );

          if (correctPassword) {
            const refreshToken = sign(
              { id: data[0].id },
              process.env.SESSION_SECRET,
              { expiresIn: "7d" }
            );
            context.setHeaders.push({
              key: "Set-Cookie",
              value: cookie.serialize("refresh-token", refreshToken, {
                httpOnly: true,
                maxAge: 3600 * 24 * 7,
              }),
            });

            return data[0];
          } else {
            return;
          }
        }
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    async addUser(parent, args, info) {
      try {
        const hashedPassword = await bcrypt.hash(args.password, 10);
        const OkPacket: {
          fieldCount: number;
          affectedRows: number;
          insertId: number;
          serverStatus: number;
          warningCount: number;
          message: string;
          protocol41: boolean;
          changedRows: number;
        } = await db.query(`
        INSERT INTO ${process.env.DB_TABLE} (name, username, password) values
        ("${args.name}", "${args.username}", "${hashedPassword}")
        `);

        return OkPacket;
      } catch (error) {
        return error;
      }
    },
    async deleteUser(parent, args, info) {
      try {
        const OkPacket: {
          fieldCount: number;
          affectedRows: number;
          insertId: number;
          serverStatus: number;
          warningCount: number;
          message: string;
          protocol41: boolean;
          changedRows: number;
        } = await db.query(
          `DELETE FROM ${process.env.DB_TABLE} WHERE name = "${args.name}"`
        );
        return OkPacket;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ["POST", "OPTIONS", "GET"],
});

export default cors(
  new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [httpHeadersPlugin],
    context: ({ event, context, req, res }) => ({
      event,
      req,
      res,
      context,
      setCookies: new Array(),
      setHeaders: new Array(),
    }),
  }).createHandler({
    path: "/api/handleUser",
  })
);

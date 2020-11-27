import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";
import { sign } from "jsonwebtoken";
const db = require("../../lib/db");

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

        const refreshToken = sign(
          { id: data[0].id },
          process.env.SESSION_SECRET,
          { expiresIn: "7d" }
        );
        const accessToken = sign(
          { id: data[0].id },
          process.env.SESSION_SECRET,
          { expiresIn: "30min" }
        );
        return data[0];
      } catch (error) {
        return error;
      }
    },
    async logInUser(parent, args, info, context) {
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
        console.log(context.res.cookie);
        context.res.cookie("bruh");
        return (await bcrypt.compare(args.password, data[0].password))
          ? data[0]
          : "Wrong Password";
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
    context: ({ req, res }) => ({
      res,
    }),
  }).createHandler({
    path: "/api/handleUser",
  })
);

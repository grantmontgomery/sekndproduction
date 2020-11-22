import { ApolloServer, gql } from "apollo-server-micro";

const db = require("../../lib/db");

export const config = {
  api: {
    bodyParser: false,
  },
};

const typeDefs = gql`
  type Query {
    users: [User!]!
    testQuery(name: String!): User!
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
    id: Int!
    name: String!
    username: String!
    password: String!
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
  },
  Mutation: {
    async addUser(parent, args, info) {
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
        } = await db.query(`
        INSERT INTO ${process.env.DB_TABLE} (name, username, password) values
        ("${args.name}", "${args.username}", "${args.password}")
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

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === "development",
}).createHandler({
  path: "/api/createNewUser",
});

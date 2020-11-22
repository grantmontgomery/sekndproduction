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
    testQuery(name: String!): User
  }

  type Mutation {
    addUser(name: String!, username: String!, password: String!): User
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
          | string = await db.query(`SELECT * from Users`);
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
        } = await db.query(`SELECT * FROM Users WHERE name = ${args.name}`);
        return data;
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    async addUser(parent, args, info) {
      try {
        const data = await db.query(`
        INSERT INTO Users (name, username, password) values
        (${args.name}, ${args.username}, ${args.password})
        `);
        // const data: { name: string } = await db.query(
        //   `SELECT * from Users where name = ${args.name}`
        // );
        return data;
      } catch (error) {
        return error;
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

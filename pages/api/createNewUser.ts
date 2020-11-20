import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-micro";
// import { typeDefs, resolvers } from "../../graphqlSetUp/schemas";

// const db = require("../../lib/db");
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const results = await db.query(`SELECT * FROM Users`);
// return res.send(results);
//   } catch (err) {
//     return res.send(err);
//   }
// };

const db = require("../../lib/db");

export const config = {
  api: {
    bodyParser: false,
  },
};

const typeDefs = gql`
  type Query {
    users: [User!]!
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
      const data:
        | { id: number; name: string; username: string; password: string }[]
        | string = await db.query(`SELECT * from Users`);
      return data;
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

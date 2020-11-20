import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-micro";
// import { typeDefs, resolvers } from "../../graphqlSetUp/schemas";

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
    username: String!
    email: String!
    password: String!
  }
`;

const resolvers = {
  Query: {
    users() {
      return;
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

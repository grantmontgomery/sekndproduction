import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-micro";
import { typeDefs, resolvers } from "../../graphqlSetUp/schemas";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === "development",
}).createHandler({
  path: "/api/createNewUser",
});

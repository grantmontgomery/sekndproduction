import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-micro";
import { createUserTypeDefs } from "../../graphqlSetUp";
import { schema } from "../../graphqlSetUp/schemas";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({
  schema,
}).createHandler({
  path: "/api/createNewUser",
});

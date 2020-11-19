import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    password: String
  }
`;

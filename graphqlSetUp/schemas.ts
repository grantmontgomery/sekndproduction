import { gql, makeExecutableSchema } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    user(username: String!): User
    addUser(username: String!, email: String!, password: String!): [User!]!
  }
  type User {
    username: String!
    email: String!
    password: String!
  }
`;

const users = [
  {
    username: "leeroy",
    email: "leeroymeng@gmail.com",
    password: "brubruh",
  },
  {
    username: "foobar",
    email: "wazzhanninfoo@gmail.com",
    password: "bjasdoifj",
  },
];

export const resolvers = {
  Query: {
    users() {
      return users;
    },
    user(parent, { username }) {
      return users.find((user) => user.username === username);
    },
    addUser(parent, { username, email, password }) {
      users.push({ username, email, password });
      return users;
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";

const server: ApolloServer = new ApolloServer({});

const handler: (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void> = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req: NextApiRequest, res: NextApiResponse) {}

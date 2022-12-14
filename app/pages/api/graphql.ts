import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { createContext } from '../../graphql/context';
import { resolvers } from '../../graphql/resolvers';
import { schema } from '../../graphql/schema';
import { IncomingMessage, ServerResponse } from 'http';

const apolloServer = new ApolloServer({
  schema,
  resolvers,
  context: createContext,
});
const cors = Cors();

const startServer = apolloServer.start();

export default cors(async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};

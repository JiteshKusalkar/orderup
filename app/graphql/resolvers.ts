import { prisma } from '../lib/prisma';

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    tenants: async () => await prisma.tenant.findMany(),
  },
};

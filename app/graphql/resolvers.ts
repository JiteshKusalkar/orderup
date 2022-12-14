import { Context } from './context';

export const resolvers = {
  Query: {
    tenants: async (_parent: any, _args: any, ctx: Context) =>
      await ctx.prisma.tenant.findMany(),
  },
};

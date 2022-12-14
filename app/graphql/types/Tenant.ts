import { extendType, objectType } from 'nexus';

export const Tenant = objectType({
  name: 'Tenant',
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('website');
    t.string('logoURL');
    t.string('createdAt');
    t.string('updatedAt');
  },
});

export const TenantsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('tenants', {
      type: 'Tenant',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.tenant.findMany();
      },
    });
  },
});

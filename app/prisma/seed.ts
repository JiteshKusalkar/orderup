import { PrismaClient } from '@prisma/client';
import { categories } from '../data/category';
import { tenant } from '../data/tenant';
import { manager } from '../data/user';

const prisma = new PrismaClient();

async function main() {
  const createdTenant = await prisma.tenant.create({
    data: tenant,
  });

  const createdManager = await prisma.user.create({
    data: { ...manager, tenantId: createdTenant.id },
  });

  const categoriesWithTenantIds = categories.map((category) => ({
    ...category,
    tenantId: createdTenant.id,
    createdBy: createdManager.id,
  }));

  const createdCategories = await prisma.category.createMany({
    data: categoriesWithTenantIds,
    skipDuplicates: true,
  });

  const createdDiningTable = await prisma.diningTable.create({
    data: {
      name: 'Table #1',
      tenantId: createdTenant.id,
      createdBy: createdManager.id,
    },
  });
}

main()
  .catch((e) => {
    console.error('error occurred!', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

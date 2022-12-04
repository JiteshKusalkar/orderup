import { Role } from "@prisma/client";

export const manager = {
  firstName: 'Manager',
  lastName: 'Manager',
  email: 'info@coffeeandcoconuts.com',
  role: Role.MANAGER,
};

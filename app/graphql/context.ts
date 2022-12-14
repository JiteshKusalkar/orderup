import { PrismaClient } from '@prisma/client';
import { NextApiHandler, NextApiResponse } from 'next';
import { prisma } from '../lib/prisma';

export type Context = {
  prisma: PrismaClient;
};

export async function createContext(req: NextApiHandler, res: NextApiResponse) {
  return {
    prisma,
  }
}

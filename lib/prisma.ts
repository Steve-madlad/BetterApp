import { PrismaClient } from "@/prisma/src/generated/prisma";

const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const db = prisma;

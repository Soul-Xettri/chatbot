import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [{ name: 'Rakesh Chhetri' }, { name: 'Soul' }],
  });
  await prisma.user.createMany({
    data: [{ name: 'Rakesh Chhetri' }, { name: 'Soul' }],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

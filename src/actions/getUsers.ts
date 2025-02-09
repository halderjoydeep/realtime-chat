import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const getUsers = async () => {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return [];
    }

    const users = await prisma.user.findMany({
      where: {
        NOT: {
          email: session.user.email,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return users;
  } catch (err) {
    console.error(err);
    return [];
  }
};

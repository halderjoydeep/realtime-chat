import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const getCurrentUser = async () => {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (err) {
    console.error(err);
    return null;
  }
};

import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { prisma } from './prisma';
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GitHub,
    Google,
    Credentials({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          throw new Error('Invalid Credentials');
        }

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid Credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          password,
          user.hashedPassword,
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid Credentials');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});

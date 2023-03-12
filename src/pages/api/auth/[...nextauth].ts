import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Auth } from '@/lib/auth';

export const authOptions: NextAuthOptions = {
  theme: {
    colorScheme: 'light',
    brandColor: '#705ecc',
    logo: ''
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      id: 'login',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'snakeaid' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          return await Auth.login(credentials);
        } catch (e: any) {
          console.log(e);
          throw e;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      return !!user;
    },
    async jwt({ token, user }) {
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
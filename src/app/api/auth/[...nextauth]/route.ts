import NextAuth from "next-auth"
import { Account, User as AuthUser } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  secret: 'fsafijsaofjsd',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    signIn: async function ({ account }: { account: Account }) {
      console.log('callback')

      if (account?.provider == "google") {
        console.log('google:', account)
        return true;
      }
    }
  },
  pages: {
    signIn: '/signIn',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
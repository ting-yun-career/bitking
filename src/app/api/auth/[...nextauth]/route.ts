import NextAuth from "next-auth"
import { Account, Profile, User as AuthUser } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    signIn: async function ({ account, profile }: { account: Account | null, profile?: Profile | null }) {
      if (account?.provider == "google") {
        return true;
      }
      return false;
    }
  },
  pages: {
    signIn: '/signIn',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

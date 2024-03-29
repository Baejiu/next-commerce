import NextAuth, { NextAuthOptions, Session, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'
import { CLIENT_ID, SECRET } from '@/constants/googleAuth'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: CLIENT_ID,
      clientSecret: SECRET
    })
  ],
  session: {
    strategy: 'database',
    maxAge: 1 * 24 * 60 * 60
  },
  callbacks: {
    session: async ({ session, user }) => {
      session.id = String(user.id)
      return Promise.resolve(session)
    }
  }
}
export default NextAuth(authOptions)

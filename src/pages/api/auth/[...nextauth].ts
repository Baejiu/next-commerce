import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'
import { CLIENT_ID, SECRET } from '@/constants/googleAuth'

const authOptions: NextAuthOptions = {
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
  }
}
export default NextAuth(authOptions)

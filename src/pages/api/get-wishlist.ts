// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { getServerSession, unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function getWishList(userId: number) {
  try {
    const response = await prisma.wishList.findUnique({
      where: {
        userId: userId
      }
    })
    return response?.productIds.split(',') || []
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}
type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    res.status(200).json({ items: [], message: `no session` })
    return
  }

  try {
    const wishList = await getWishList(Number(session.id))
    console.log(wishList)
    res.status(200).json({ items: wishList, message: `SUCCESS` })
  } catch (error) {
    res.status(400).json({ message: `failed` })
  }
}

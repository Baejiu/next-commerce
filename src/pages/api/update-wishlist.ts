// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function updateWishList(userId: number, productId: string) {
  try {
    const wishList = await prisma.wishList.findUnique({
      where: {
        userId: userId
      }
    })
    const originWishList =
      wishList?.productIds != null && wishList?.productIds != ''
        ? wishList.productIds.split(',')
        : []

    const isWished = originWishList.includes(productId)
    console.log(`originWishList ; ${originWishList}`)
    const newWishList = isWished
      ? originWishList.filter((id) => id != productId)
      : [...originWishList, productId]
    console.log(newWishList)
    const response = await prisma.wishList.upsert({
      where: {
        userId: userId
      },
      update: {
        productIds: newWishList.join(',')
      },
      create: {
        userId: userId,
        productIds: newWishList.join(',')
      }
    })
    return response?.productIds.split(',')
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
  const { productId } = JSON.parse(req.body)
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    res.status(200).json({ items: [], message: `no session` })
    return
  }

  try {
    const wishList = await updateWishList(Number(session.id), String(productId))
    res.status(200).json({ items: wishList, message: `SUCCESS` })
  } catch (error) {
    res.status(400).json({ message: `failed` })
  }
}

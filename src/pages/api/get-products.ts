import { getOrderBy } from './../../constants/products'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProducts(
  skip: number,
  take: number,
  category?: number,
  orderBy?: string,
  contains?: string
) {
  const containsCondition =
    contains && contains !== ''
      ? {
          name: {
            contains: contains
          }
        }
      : undefined
  const where =
    category && category !== -1
      ? {
          category_id: category,
          ...containsCondition
        }
      : containsCondition
      ? containsCondition
      : undefined

  const orderByCondition = getOrderBy(orderBy)
  try {
    const response = await prisma.products.findMany({
      skip: skip,
      take: take,
      where: where,
      ...orderByCondition
    })
    return response
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
  const { skip, take, category, orderBy, contains } = req.query
  if (skip == null || take == null) {
    res.status(400).json({ message: `no skip or take` })
  }
  try {
    const products = await getProducts(
      Number(skip),
      Number(take),
      Number(category),
      String(orderBy),
      String(contains)
    )
    res.status(200).json({ items: products, message: `SUCCESS` })
  } catch (error) {
    res.status(400).json({ message: `failed` })
  }
}

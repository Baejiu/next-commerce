// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwtDecode from 'jwt-decode'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function SignUp(credential: string) {
  const decoded: { name: string; email: string; picture: string } =
    jwtDecode(credential)

  const response = await prisma.user.upsert({
    where: {
      email: decoded.email
    },
    update: {
      name: decoded.name,
      image: decoded.picture
    },
    create: {
      email: decoded.email,
      name: decoded.name,
      image: decoded.picture
    }
  })
  try {
    console.log(response)
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
  const { credential } = req.query
  try {
    const products = await SignUp(String(credential))
    res.status(200).json({ items: products, message: `SUCCESS` })
  } catch (error) {
    res.status(400).json({ message: `failed` })
  }
}

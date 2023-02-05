// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_htAsefWuW6QtfrwmpPVm46apRFwDC8X0mUBgj6xP91R'
})
const databaseId = 'c0a9dbb3862342818ae07fa9d399f2cb'

async function getDetail(pageId: string, propertyId: string) {
  try {
    const response = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}
type Data = {
  detail?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { pageId, propertyId } = req.query
  try {
    const response = await getDetail(String(pageId), String(propertyId))
    res.status(200).json({ detail: response, message: `SUCCESS` })
  } catch (error) {
    res.status(400).json({ message: `failed` })
  }
}

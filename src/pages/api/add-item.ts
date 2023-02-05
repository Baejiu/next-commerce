// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_htAsefWuW6QtfrwmpPVm46apRFwDC8X0mUBgj6xP91R'
})
const databaseId = 'c0a9dbb3862342818ae07fa9d399f2cb'

async function addItem(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        }
      }
    })
    console.log(response)
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}
type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query
  if (name == null) {
    return res.status(400).json({ message: 'No name' })
  }

  try {
    await addItem(String(name))
    res.status(200).json({ message: `SUCCESS ${name} added.` })
  } catch (error) {
    res.status(400).json({ message: `failed ${name} added.` })
  }
}

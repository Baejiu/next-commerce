import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const productData: Prisma.productsCreateInput[] = [
  {
    name: 'Black SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow SNEAKERS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=SNEAKERS',
    category_id: 1,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow SNEAKERS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow T-Shirt',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=T-Shirt',
    category_id: 2,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow T-Shirt","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow PANTS',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=PANTS',
    category_id: 3,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow PANTS","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow CAP',
    image_url: 'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=CAP',
    category_id: 4,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow CAP","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Black HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Black HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'White HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"White HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Blue HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Blue HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Red HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Red HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  },
  {
    name: 'Yellow HOODIE',
    image_url:
      'http://via.placeholder.com/320x300.png/EBEBEB/ffffff?text=HOODIE',
    category_id: 5,
    contents:
      '{"blocks":[{"key":"f2o05","text":"Yellow HOODIE","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    price: undefined
  }
]
async function main() {
  const CATEGORY_MAP = ['SNEAKERS', 'T - SHIRT', 'PANTS', 'CAP', 'HOODIE']

  CATEGORY_MAP.map(async (c, i) => {
    const product = await prisma.categories.upsert({
      where: {
        id: i + 1
      },
      update: {
        name: c
      },
      create: {
        name: c
      }
    })
    console.log(`upsert category id: ${product.id}`)
  })
  await prisma.products.deleteMany({})

  for (const p of productData) {
    const product = await prisma.products.create({
      data: { ...p, price: getPrice() }
    })
    console.log(`CREATE id: ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
  })

const getPrice = () => Math.floor(Math.random() * (100000 - 20000) + 20000)

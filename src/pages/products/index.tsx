import Button from '@/common/components/Button/Button'
import { TAKE } from '@/constants/products'
import { products } from '@prisma/client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Products() {
  const [skip, setSkip] = useState(0)
  const [products, setProducts] = useState<products[]>([])

  useEffect(() => {
    fetch(`/api/get-products?skip=0&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [])

  const getProducts = useCallback(() => {
    const next = skip + TAKE
    fetch(`/api/get-products?skip=${next}&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => {
        const list = products.concat(data.items)
        setProducts(list)
      })
    setSkip(next)
  }, [skip, products])
  return (
    <Container>
      <List>
        {products &&
          products.map((item) => (
            <ListItem key={item.id}>
              <Image
                src={item.image_url ?? ''}
                width={320}
                height={300}
                alt={item.name}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              />
              {item.name}
            </ListItem>
          ))}
      </List>
      <Button onClick={getProducts}>더보기</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 1200px;
  padding: 0 36px;
  margin: 36px auto;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`

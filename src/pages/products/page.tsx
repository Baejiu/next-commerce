import Button from '@/common/components/Button/Button'
import { categories, products } from '@prisma/client'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

import { Input, Pagination, SegmentedControl, Select } from '@mantine/core'
import { CATEGORY_MAP, FILTERS, TAKE } from '@/constants/products'
import { IconSearch } from '@tabler/icons-react'
import useDebounce from '@/common/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export default function Products() {
  const router = useRouter()
  const [activePage, setPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>('-1')
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    FILTERS[0].value
  )
  const [keyword, setKeyword] = useState<string>('')

  const debounceKeyword = useDebounce<string>(keyword)

  const { data: categories } = useQuery<
    { items: categories[] },
    unknown,
    categories[]
  >(
    [`/api/get-categories`],
    () => fetch(`/api/get-categories`).then((res) => res.json()),
    {
      select: (data) => data.items
    }
  )
  const { data: total } = useQuery<{ items: number }, unknown, number>(
    [
      `/api/get-products-count?category=${selectedCategory}&contains=${debounceKeyword}`
    ],
    () =>
      fetch(
        `/api/get-products-count?category=${selectedCategory}&contains=${debounceKeyword}`
      ).then((res) => res.json()),
    {
      select: (data) => Math.ceil(data.items / TAKE)
    }
  )

  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    [
      `/api/get-products?skip=${
        TAKE * (activePage - 1)
      }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debounceKeyword}`
    ],
    () =>
      fetch(
        `/api/get-products?skip=${
          TAKE * (activePage - 1)
        }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debounceKeyword}`
      ).then((res) => res.json()),
    {
      select: (data) => data.items
    }
  )
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }
  return (
    <Container>
      <Input
        icon={<IconSearch />}
        placeholder="Search"
        value={keyword}
        onChange={handleSearch}
      />
      <Select
        value={selectedFilter}
        onChange={setSelectedFilter}
        data={FILTERS}
      />
      {categories && (
        <SegmentedControl
          value={selectedCategory}
          onChange={setSelectedCategory}
          data={[
            { label: 'ALL', value: '-1' },
            ...categories.map((category) => ({
              label: category.name,
              value: String(category.id)
            }))
          ]}
          color="dark"
        />
      )}
      <List>
        {products &&
          products.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => router.push(`/products/${item.id}`)}
            >
              <Image
                src={item.image_url ?? ''}
                width={320}
                height={300}
                alt={item.name}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
              />
              <h3>{item.name}</h3>
              <span>{CATEGORY_MAP[item.category_id - 1]}</span>
              <span>{item.price.toLocaleString()}원</span>
            </ListItem>
          ))}
      </List>
      <PageNavigation>
        {total && (
          <Pagination page={activePage} onChange={setPage} total={total} />
        )}
      </PageNavigation>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 36px 0;
  padding: 0 36px;
`

const List = styled.ul`
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 360px 360px 360px;
  grid-template-columns: 320px 320px 320px;
  grid-gap: 20px;
`
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`
const PageNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto 0;
`

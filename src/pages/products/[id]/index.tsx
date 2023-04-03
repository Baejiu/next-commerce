import CustomEditor from '@/common/components/Editor/Editor'
import { CATEGORY_MAP } from '@/constants/products'
import { Button } from '@mantine/core'
import { products } from '@prisma/client'
import { IconHeart, IconHeartbeat } from '@tabler/icons-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { format } from 'date-fns'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

import { useRouter } from 'next/router'
import Carousel from 'nuka-carousel/lib/carousel'
import { useState } from 'react'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const product = await fetch(
    `http://localhost:3000/api/get-product?id=${context.params?.id}`
  )
    .then((res) => res.json())
    .then((data) => data.items)

  return {
    props: {
      product: { ...product, images: [product.image_url, product.image_url] }
    }
  }
}

const WISHLIST_QUERYKEY = '/api/get-wishlist'

export default function Product(props: {
  product: products & { images: string[] }
}) {
  const router = useRouter()
  const { data: session } = useSession()
  const { id: productId } = router.query
  const queryClient = useQueryClient()
  const [editorState] = useState<EditorState | undefined>(
    props.product.contents
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(props.product.contents))
        )
      : EditorState.createEmpty()
  )
  const product = props.product

  const { data: wishList } = useQuery<any[]>([WISHLIST_QUERYKEY], () =>
    fetch(WISHLIST_QUERYKEY)
      .then((res) => res.json())
      .then((data) => data.items)
  )

  const { mutate } = useMutation(
    (productId: string) =>
      fetch('/api/update-wishlist', {
        method: 'POST',
        body: JSON.stringify({
          productId: productId
        })
      })
        .then((res) => res.json())
        .then((data) => data.items),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([WISHLIST_QUERYKEY])
      }
    }
  )
  const isWished = wishList && productId ? wishList.includes(productId) : false
  return (
    <>
      {product != null && productId != null ? (
        <>
          <Carousel>
            {product.images.map((url, idx) => (
              <Image
                key={`${url}-${idx}`}
                src={url}
                alt={url}
                width={320}
                height={300}
              />
            ))}
          </Carousel>
          <span>{CATEGORY_MAP[product.category_id - 1]}</span>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <span>{format(new Date(product.createAt), 'yyyy년 M월 d일')}</span>
          <div>{wishList}</div>
          <Button
            leftIcon={isWished ? <IconHeartbeat /> : <IconHeart />}
            style={{ backgroundColor: isWished ? 'red' : 'grey' }}
            onClick={() => {
              if (session == null) {
                alert('로그인이 필요합니다.')
                router.push('/auth/login')
                return
              }
              mutate(String(productId))
            }}
          >
            찜하기
          </Button>
          {editorState != null && (
            <CustomEditor editorState={editorState} readOnly />
          )}
        </>
      ) : (
        <>로딩중..</>
      )}
    </>
  )
}

import CustomEditor from '@/common/components/Editor/Editor'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Product() {
  const router = useRouter()
  const { id: productId } = router.query

  const [editorState, setEditorState] = useState<EditorState | undefined>(
    undefined
  )

  const handleSave = () => {
    console.log(editorState?.getCurrentContent())
    if (editorState) {
      fetch('/api/update-product', {
        method: 'POST',
        body: JSON.stringify({
          id: Number(productId),
          contents: JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
          )
        })
      })
        .then((res) => res.json())
        .then(() => alert('success'))
    }
  }

  useEffect(() => {
    console.log(productId)
    if (productId != null) {
      fetch(`/api/get-product?id=${productId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.items?.contents) {
            return setEditorState(
              EditorState.createWithContent(
                convertFromRaw(JSON.parse(data.items.contents))
              )
            )
          } else {
            return setEditorState(EditorState.createEmpty())
          }
        })
    }
  }, [productId])
  return (
    <>
      {/* <Carousel>
        {images.map((item) => (
          <Image
            key={item.original}
            src={item.original}
            alt={item.original}
            width={500}
            height={300}
            layout="responsive"
          />
        ))}
      </Carousel> */}
      {editorState != null && (
        <CustomEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onSave={handleSave}
        />
      )}
    </>
  )
}

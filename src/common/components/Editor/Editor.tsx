import dynamic from 'next/dynamic'
import { Dispatch, SetStateAction } from 'react'
import { EditorProps, EditorState } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styled from 'styled-components'
import Button from '../Button/Button'

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false
  }
)
export default function CustomEditor({
  editorState,
  onEditorStateChange,
  onSave,
  readOnly = false
}: {
  editorState: EditorState
  onEditorStateChange?: Dispatch<SetStateAction<EditorState | undefined>>
  onSave?: () => void
  readOnly?: boolean
}) {
  return (
    <Wrapper>
      <Editor
        readOnly={readOnly}
        toolbarHidden={readOnly}
        editorState={editorState}
        toolbarClassName="editorToolbar-hidden"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbar={{
          options: ['inline', 'list', 'textAlign', 'link']
        }}
        onEditorStateChange={onEditorStateChange}
      />
      {!readOnly && <Button onClick={onSave}>Save</Button>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px;
`

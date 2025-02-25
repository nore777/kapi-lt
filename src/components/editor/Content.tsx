import React from "react"
import { EditorContent, Editor } from "@tiptap/react"
import useTheme from "@/hooks/useTheme"

interface NewsEditorProps {
  editor: Editor | null
}

const NewsEditorContent: React.FC<NewsEditorProps> = ({ editor }) => {
  const { theme } = useTheme()

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'var(--gray-2)',
        border: '1px solid var(--slate-7)',
        padding: '1em'
      }}
    >
      <EditorContent
        spellCheck="false"
        editor={editor}
      />
    </div>
  )
}

export default NewsEditorContent

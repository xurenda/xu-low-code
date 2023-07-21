import { CSSProperties } from 'react'

export interface EditorProps {
  className?: string
  style?: CSSProperties
}

function Editor(props: EditorProps) {
  const { className, style } = props
  return (
    <div className={className} style={style}>
      Editor
    </div>
  )
}

export default Editor

import LcEngine from '@xulc/engine/src/Engine'
import { CSSProperties } from 'react'
import reactRender from '../reactRender'

export interface EditorProps {
  engine: LcEngine
  className?: string
  style?: CSSProperties
}

function Editor(props: EditorProps) {
  const { engine, className, style } = props
  const scene = engine.scene.currentScene

  function onClick(...args: any) {
    console.log('~~~~~!eee', args)
  }

  return (
    <div className={className} style={style} onClick={onClick}>
      {scene?.children.map(i => reactRender(i as any))}
    </div>
  )
}

export default Editor

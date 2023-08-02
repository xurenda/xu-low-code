import { Editor } from '@xulc/editor'
import style from './index.module.scss'
import { useContext } from 'react'
import GlobalContext from '../context'

function App() {
  const { engine } = useContext(GlobalContext)

  if (!engine) {
    return <div>Loading...</div>
  }

  return (
    <div className={style.app}>
      <div className={style.header}></div>
      <div className={style.main}>
        <div className={style.left}></div>
        <div className={style['editor-container']}>
          <Editor className={style.editor} engine={engine} />
        </div>
        <div className={style.right}></div>
      </div>
    </div>
  )
}

export default App

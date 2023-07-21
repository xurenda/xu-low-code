import { Editor } from '@xulc/editor'
import style from './index.module.scss'

function App() {
  return (
    <div className={style.app}>
      <div className={style.header}></div>
      <div className={style.main}>
        <div className={style.left}></div>
        <div className={style['editor-container']}>
          <Editor className={style.editor} />
        </div>
        <div className={style.right}></div>
      </div>
    </div>
  )
}

export default App

import LcEngine from '@xulc/engine/src/Engine'
import { createContext } from 'react'

interface IGlobalContext {
  engine: LcEngine | null
}

const GlobalContext = createContext<IGlobalContext>({
  engine: null,
})

export default GlobalContext

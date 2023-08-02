import LcEngine from './Engine'
import engineGlobalStore from './store'

function init(): LcEngine {
  const lcEngine = new LcEngine()
  engineGlobalStore.init(lcEngine)
  return lcEngine
}

export default init

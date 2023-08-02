import LcEngine from '../Engine'

class EngineGlobalStore {
  private _engine: LcEngine | null = null

  get engine(): LcEngine {
    if (!this._engine) {
      throw new Error('Engine is not initialized')
    }
    return this._engine
  }

  init(engine: LcEngine) {
    this._engine = engine
  }
}

const engineGlobalStore = new EngineGlobalStore()

export default engineGlobalStore

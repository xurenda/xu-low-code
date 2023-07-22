import LcMaterialManager from './material/MaterialManager'
import LcSceneManager from './scene/SceneManager'

class LcEngine {
  private _material = new LcMaterialManager()
  private _scene = new LcSceneManager()

  get material() {
    return this._material
  }

  get scene() {
    return this._scene
  }
}

export default LcEngine

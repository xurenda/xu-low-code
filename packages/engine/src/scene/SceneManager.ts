import type { LcSceneSchema } from '@xulc/types'
import LcScene from './Scene'

class LcSceneManager {
  private _sceneMap = new Map<string, LcScene>()
  private _currentScene = ''

  get sceneMap(): Map<string, LcScene> {
    return this._sceneMap
  }

  get currentScene(): LcScene | null {
    if (!this._currentScene) return null
    return this._sceneMap.get(this._currentScene) ?? null
  }

  set currentScene(scene: LcScene | string | null) {
    if (!scene || typeof scene === 'string') {
      this._currentScene = scene || ''
    } else {
      this._currentScene = scene.id || ''
    }
  }

  addScene(scene: LcSceneSchema): LcScene {
    const _scene = new LcScene(scene)
    this._sceneMap.set(_scene.id, _scene)
    return _scene
  }

  removeScene(id: string) {
    this._sceneMap.delete(id)
  }
}

export default LcSceneManager

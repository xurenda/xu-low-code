import type { LcMaterialMeta } from '@xulc/types'
import LcComponent from './Component'
import LcMaterial from './Material'

class LcMaterialManager {
  private _materialMap = new Map<string, LcMaterial>()

  get materialMap() {
    return this._materialMap
  }

  addMaterial(material: LcMaterialMeta) {
    this._materialMap.set(material.name, new LcMaterial(material))
  }

  removeMaterial(materialName: string) {
    this._materialMap.delete(materialName)
  }

  getMaterial(materialName: string): LcMaterial | null {
    return this._materialMap.get(materialName) ?? null
  }

  getComponent(materialName: string, componentName: string): LcComponent | null {
    const material = this._materialMap.get(materialName)
    if (!material) return null
    return material.componentMap.get(componentName) ?? null
  }
}

export default LcMaterialManager

import type { LcComponentSchema, LcMaterialMeta, LcMaterialMetaR } from '@xulc/types'
import WithSchema from '../WithSchema'
import LcComponent from './Component'

class LcMaterial extends WithSchema<LcMaterialMetaR> {
  private readonly _name: string
  private _componentMap: Map<string, LcComponent>
  title: string

  constructor(meta: LcMaterialMeta) {
    super()
    this._name = meta.name
    this._componentMap = new Map()
    if (meta.components?.length) {
      this.addComponents(...meta.components)
    }
    this.title = meta.title || ''
  }

  get schema() {
    return {
      name: this.name,
      title: this.title,
      components: Array.from(this.componentMap.values()).map(i => i.schema),
    }
  }

  get name() {
    return this._name
  }

  get componentMap() {
    return this._componentMap
  }

  addComponents(...components: LcComponentSchema[]) {
    for (const component of components) {
      const _component = new LcComponent(component, this.name)
      this._componentMap.set(_component.name, _component)
    }
  }

  removeComponents(...componentNames: string[]) {
    for (const name of componentNames) {
      this._componentMap.delete(name)
    }
  }
}

export default LcMaterial

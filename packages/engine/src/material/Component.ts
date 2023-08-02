import type { LcComponentDefaultComp, LcComponentSchema, LcComponentSchemaR } from '@xulc/types'
import WithSchema from '../WithSchema'

class LcComponent<Comp = LcComponentDefaultComp> extends WithSchema<LcComponentSchemaR<Comp>> {
  private readonly _materialName: string
  private readonly _name: string
  private readonly _comp: Comp
  title: string

  constructor(meta: LcComponentSchema<Comp>, materialName: string) {
    super()
    this._materialName = materialName
    this._name = meta.name
    this.title = meta.title || ''
    this._comp = meta.comp
  }

  get schema() {
    return {
      materialName: this.materialName,
      name: this.name,
      title: this.title,
      comp: this.comp,
    }
  }

  get materialName() {
    return this._materialName
  }

  get name() {
    return this._name
  }

  get comp() {
    return this._comp
  }
}

export default LcComponent

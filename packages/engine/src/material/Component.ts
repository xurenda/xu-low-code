import type { LcComponentSchema, LcComponentSchemaR } from '@xulc/types'
import type { ReactNode } from 'react'
import WithSchema from '../WithSchema'

class LcComponent extends WithSchema<LcComponentSchemaR> {
  private readonly _materialName: string
  private readonly _name: string
  private readonly _component: ReactNode
  title: string

  constructor(meta: LcComponentSchema, materialName: string) {
    super()
    this._materialName = materialName
    this._name = meta.name
    this.title = meta.title || ''
    this._component = meta.component
  }

  get schema() {
    return {
      materialName: this.materialName,
      name: this.name,
      title: this.title,
      component: this.component,
    }
  }

  get materialName() {
    return this._materialName
  }

  get name() {
    return this._name
  }

  get component() {
    return this._component
  }
}

export default LcComponent

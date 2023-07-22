import { guid } from '@xulc/utils'
import LcNode from './Node'
import WithSchema from '../WithSchema'
import type { LcSceneSchema, LcSceneSchemaR } from '@xulc/types'

class LcScene extends WithSchema<LcSceneSchemaR> {
  private readonly _id: string
  w: number | string
  h: number | string
  locale: string
  children: LcNode[]

  constructor(scene: LcSceneSchema) {
    super()
    this._id = `s_${guid()}`
    this.w = scene.w || '100%'
    this.h = scene.h || '100%'
    this.locale = scene.locale || ''
    this.children = (scene.children || []).map(child => new LcNode(child))
  }

  get schema() {
    return {
      id: this.id,
      w: this.w,
      h: this.h,
      locale: this.locale,
      children: this.children.map(i => i.schema),
    }
  }

  get id() {
    return this._id
  }
}

export default LcScene

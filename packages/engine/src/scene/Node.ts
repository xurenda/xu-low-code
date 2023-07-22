import { guid } from '@xulc/utils'
import type { LcNodeDefaultProps, LcNodeSchema, LcNodeSchemaR } from '@xulc/types'
import WithSchema from '../WithSchema'
import { ReactNode } from 'react'

class LcNode<P extends LcNodeDefaultProps = LcNodeDefaultProps> extends WithSchema<
  LcNodeSchemaR<P>
> {
  private readonly _id: string
  private readonly _name: string
  private readonly _materialName: string
  private readonly _component: ReactNode
  title: string
  hidden: boolean
  locked: boolean
  props: P
  children: LcNode[]

  constructor(node: LcNodeSchema<P>) {
    super()
    this._id = `n_${guid()}`
    this._name = node.name
    this._materialName = node.materialName
    // this._component = node.component
    this.title = node.title || ''
    this.hidden = node.hidden || false
    this.locked = node.locked || false
    this.props = node.props || ({} as P)
    const children = (node.children || []).map(child => new LcNode(child))
    this.children = children
  }

  get schema(): LcNodeSchemaR<P> {
    return {
      id: this.id,
      name: this.name,
      materialName: this.materialName,
      title: this.title,
      hidden: this.hidden,
      locked: this.locked,
      props: this.props,
      children: this.children.map(i => i.schema),
    }
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get materialName() {
    return this._materialName
  }
}

export default LcNode

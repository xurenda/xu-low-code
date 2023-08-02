import { guid } from '@xulc/utils'
import type {
  LcComponentDefaultComp,
  LcNodeDefaultProps,
  LcNodeSchema,
  LcNodeSchemaR,
} from '@xulc/types'
import WithSchema from '../WithSchema'
import engineGlobalStore from '../store'

class LcNode<
  Comp = LcComponentDefaultComp,
  P extends LcNodeDefaultProps = LcNodeDefaultProps,
> extends WithSchema<LcNodeSchemaR<P>> {
  private readonly _id: string
  private readonly _componentName: string
  private readonly _materialName: string
  title: string
  hidden: boolean
  locked: boolean
  props: P
  children: LcNode[]

  constructor(node: LcNodeSchema<P>) {
    super()
    this._id = `n_${guid()}`
    this._componentName = node.componentName
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
      componentName: this.componentName,
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

  get componentName() {
    return this._componentName
  }

  get materialName() {
    return this._materialName
  }

  get comp(): Comp | null {
    return (
      engineGlobalStore.engine.material.getComponent<Comp>(this.materialName, this.componentName)
        ?.comp ?? null
    )
  }
}

export default LcNode

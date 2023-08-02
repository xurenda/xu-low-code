import LcNode from '@xulc/engine/src/scene/Node'
import { ReactNode, createElement } from 'react'

function reactRender(node: LcNode<ReactNode>): ReactNode {
  const { id, comp, props, children } = node
  if (!comp) return null

  const a = createElement(
    comp as any,
    {
      key: id,
      ...props,
    },
    ...children.map(i => reactRender(i as LcNode<ReactNode>)),
  )
  console.log('~~~~~!a', a)

  return a
}

export default reactRender

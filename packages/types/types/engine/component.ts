import type { ReactNode, FunctionComponent, ComponentClass } from 'react'
import { LcNodeDefaultProps } from '.'

export type LcComponentDefaultComp<P = LcNodeDefaultProps> =
  | string
  | FunctionComponent<P>
  | ComponentClass<P, any>
  | ((props: P) => ReactNode)

export interface LcComponentSchema<Comp = LcComponentDefaultComp> {
  name: string
  title?: string
  comp: Comp
}

export interface LcComponentSchemaR<Comp = LcComponentDefaultComp> {
  readonly materialName: string
  readonly name: string
  title: string
  readonly comp: Comp
}

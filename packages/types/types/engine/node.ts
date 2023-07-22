export type LcNodeDefaultProps = Record<string, any>

export interface LcNodeSchema<P extends LcNodeDefaultProps = LcNodeDefaultProps> {
  name: string
  materialName: string
  title?: string
  hidden?: boolean
  locked?: boolean
  props?: P
  children?: LcNodeSchema[]
}

export interface LcNodeSchemaR<P extends LcNodeDefaultProps = LcNodeDefaultProps> {
  readonly id: string
  readonly name: string
  readonly materialName: string
  title: string
  hidden: boolean
  locked: boolean
  props: P
  children: LcNodeSchemaR[]
}

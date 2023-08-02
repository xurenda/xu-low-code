export type LcNodeDefaultProps = Record<string, any>

export interface LcNodeSchema<P extends LcNodeDefaultProps = LcNodeDefaultProps> {
  materialName: string
  componentName: string
  title?: string
  hidden?: boolean
  locked?: boolean
  props?: P
  children?: LcNodeSchema[]
}

export interface LcNodeSchemaR<P extends LcNodeDefaultProps = LcNodeDefaultProps> {
  readonly id: string
  readonly materialName: string
  readonly componentName: string
  title: string
  hidden: boolean
  locked: boolean
  props: P
  children: LcNodeSchemaR[]
}

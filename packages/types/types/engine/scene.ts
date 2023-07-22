import { LcNodeSchema, LcNodeSchemaR } from '.'

export interface LcSceneSchema {
  w?: number | string
  h?: number | string
  locale?: string
  children?: LcNodeSchema[]
}

export interface LcSceneSchemaR {
  readonly id: string
  w: number | string
  h: number | string
  locale: string
  children: LcNodeSchemaR[]
}

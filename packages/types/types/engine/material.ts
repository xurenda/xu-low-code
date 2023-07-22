import { LcComponentSchema, LcComponentSchemaR } from '.'

export interface LcMaterialMeta {
  name: string
  components?: LcComponentSchema[]
  title?: string
}

export interface LcMaterialMetaR {
  readonly name: string
  readonly components: LcComponentSchemaR[]
  title: string
}

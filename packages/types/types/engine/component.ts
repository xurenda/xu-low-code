import type { ReactNode } from 'react'

export interface LcComponentSchema {
  name: string
  title?: string
  component: ReactNode
}

export interface LcComponentSchemaR {
  readonly materialName: string
  readonly name: string
  title: string
  readonly component: ReactNode
}

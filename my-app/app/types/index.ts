import { ReactNode } from 'react'

export interface Option {
  value: string
  label: string
  renderLabel?: (id: string) => ReactNode
  isDisabled?: boolean
}

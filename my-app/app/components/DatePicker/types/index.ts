import { ReactNode } from 'react'

import { RangeSelection } from 'components/Calendar/types'

export interface QuickOption {
  id: string
  value: RangeSelection
  label: ReactNode
}

export enum TabOptions {
  QuickSelect,
  CustomRange,
}

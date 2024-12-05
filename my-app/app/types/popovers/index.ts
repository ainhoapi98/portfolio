import { Placement } from '@floating-ui/react'

export enum PopoverType {
  Alert = 'alert',
  Calendar = 'calendar',
}

export interface Popover {
  isOpen: boolean
  type: PopoverType
  params?: {
    placement: Placement
    refKey: string
    handleChange?: (date: string) => void
  }
}

import { createContext, ElementType } from 'react'
import { Position, Selection } from 'types/dates'
import { ConfigType } from 'dayjs'

export interface ContextProps {
  isDateValid: (date: string) => boolean
  cellComponent?: ElementType
  handleSelect: (date: string) => void
  isSelected: (date: string) => boolean
}

export interface RangeContextProps extends Omit<ContextProps, 'isSelected'> {
  getPosition: (date: string) => Position | undefined
  handleHoverDate: (date: string) => void
}

type GenericProps = ContextProps | RangeContextProps

export const Context = createContext<GenericProps>({
  isDateValid: () => false,
  isSelected: () => false,
  handleSelect: () => null,
})

export interface Props {
  initValue?: Selection
  minValidDate?: ConfigType
  maxValidDate?: ConfigType
  cellComponent?: ElementType
  onSelectUpdate?: (selection: Selection) => void
  maxDays?: number
  resetSignal?: number
}

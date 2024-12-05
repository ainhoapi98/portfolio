import { ReactNode } from 'react'

export enum Position {
  SelectionStart,
  SelectionEnd,
  SelectionBetween,
  HoverStart,
  HoverEnd,
  HoverBetween,
}

export type DateSelection = string | null
export type SimpleSelection = [DateSelection]
export type RangeSelection = [DateSelection, DateSelection]
export type Selection = SimpleSelection | RangeSelection

export interface QuickOption {
  id: string
  value: RangeSelection
  label: ReactNode
}

export enum TabOptions {
  QuickSelect,
  CustomRange,
}

export enum Mode {
  Single = 'single',
  Range = 'range',
}

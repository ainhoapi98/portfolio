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

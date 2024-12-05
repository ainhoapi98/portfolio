// Types
import {QuickOption, RangeSelection} from 'types/dates'

/**
 * Returns the id of the matching Quick Option. undefined if none match
 *
 * @param options         Array of quick options
 * @param selectedValue   Selected value
 */
export const getQuickValue = (
  options: Array<QuickOption>,
  selectedValue: RangeSelection | null,
) => {
  if (!selectedValue || options.length < 1) return undefined
  return options.find(option => {
    if (
      option.value[0] === selectedValue[0] &&
      option.value[1] === selectedValue[1]
    ) {
      return true
    }
  })?.id
}

export const isRangeSet = (range: RangeSelection) => !!(range[0] && range[1])
export const areRangesEqual = (
  range1: RangeSelection,
  range2: RangeSelection,
) => range1[0] === range2[0] && range1[1] === range2[1]

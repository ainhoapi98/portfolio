import { PropsWithChildren, useEffect, useState } from 'react'
import dayjs, { ConfigType } from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
// Utils
import { isDateWithinRange } from 'components/Calendar/utils'

// Context
import { Context, Props } from 'components/Calendar/Context'

// Types
import { Position, RangeSelection } from 'types/dates'

dayjs.extend(isSameOrAfter)

type Range = [string | null, string | null, string | null]

export type ContextProps = Omit<Props, 'onSelectUpdate'> & {
  onSelectUpdate: (range: RangeSelection) => void
}

/**
 * Context that controls the rules for selecting a range of dates - two dates
 * intended to represent a sequence.
 *
 * @param initValue
 * @param minValidDate
 * @param maxValidDate
 * @param cellComponent
 * @param maxDays
 * @param onSelectUpdate
 * @param resetSignal
 * @param children
 */
const RangeSelectContext = ({
  initValue,
  minValidDate,
  maxValidDate,
  cellComponent,
  maxDays,
  onSelectUpdate,
  resetSignal,
  children,
}: PropsWithChildren<ContextProps>) => {
  const [[start, end, peeked], setSelected] = useState<Range>([
    (initValue as RangeSelection)?.[0],
    (initValue as RangeSelection)?.[1],
    null,
  ])

  useEffect(() => {
    setSelected([null, null, null])
  }, [resetSignal])

  useEffect(() => {
    setSelected([
      (initValue as RangeSelection)?.[0],
      (initValue as RangeSelection)?.[1],
      null,
    ])
  }, [initValue?.toString()])

  const isDateValid = (date: string): boolean => {
    const momentDate = dayjs(date)

    const isWithinAllowedRange = isDateWithinRange(
      date,
      minValidDate,
      maxValidDate,
    )

    if (!start || (start && end)) {
      return isWithinAllowedRange
    }

    const isWithinLimits = maxDays
      ? momentDate.isBefore(dayjs(start).add(maxDays, 'days'))
      : true
    const isAfterStart = momentDate.isSameOrAfter(start, 'day')

    return isWithinAllowedRange && isAfterStart && isWithinLimits
  }

  const handleHoverDate = (date: string) => {
    if (!start) {
      return
    }
    setSelected([start, end, date])
  }

  const handleSelectDate = (date: string) => {
    if (start && !end) {
      setSelected([start, date, peeked])
    } else {
      setSelected([date, null, peeked])
    }
  }

  const getPosition = (date: string): Position | undefined => {
    if (date === start) {
      return Position.SelectionStart
    }

    if (date === end) {
      return Position.SelectionEnd
    }

    if (
      dayjs(date).isBetween(
        start as ConfigType,
        (end as ConfigType) || (peeked as ConfigType),
        'day',
        '()',
      )
    ) {
      return Position.SelectionBetween
    }

    return
  }

  useEffect(() => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
    onSelectUpdate && onSelectUpdate([start, end])
  }, [start, end])

  return (
    <Context.Provider
      value={{
        isDateValid,
        cellComponent,
        handleSelect: handleSelectDate,
        getPosition,
        handleHoverDate,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default RangeSelectContext

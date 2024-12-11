import {PropsWithChildren, useEffect, useState} from 'react'
import {Context, Props} from '../index'

// Utils
import {isDateWithinRange} from 'components/Calendar/utils'

// Types
import {SimpleSelection} from 'types/dates'

/**
 * Context that controls the single-date selection "rules".
 *
 * It should wrap a Calendar which the cell-component that should consume the
 * information of this context.
 *
 * @param initValue
 * @param onSelectUpdate
 * @param minValidDate
 * @param maxValidDate
 * @param cellComponent
 * @param children
 */
const SingleSelectContext = ({
  initValue,
  onSelectUpdate,
  minValidDate,
  maxValidDate,
  cellComponent,
  children,
}: PropsWithChildren<Props>) => {
  const [selected, setSelected] = useState<SimpleSelection>(
    initValue as SimpleSelection,
  )

  const isDateValid = (date: string): boolean =>
    isDateWithinRange(date, minValidDate, maxValidDate)

  const handleSelectDate = (date: string) => {
    setSelected([date])
  }

  const isDateSelected = (date: string): boolean => selected[0] === date

  useEffect(() => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
    onSelectUpdate && onSelectUpdate(selected)
  }, [selected])

  return (
    <Context.Provider
      value={{
        isDateValid,
        cellComponent,
        handleSelect: handleSelectDate,
        isSelected: isDateSelected,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default SingleSelectContext

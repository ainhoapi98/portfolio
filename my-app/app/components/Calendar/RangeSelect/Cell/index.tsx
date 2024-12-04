import { Context, useContext } from 'react'

// Components
import { BaseContent } from 'components/Calendar/Base/Cell'

// Context
import {
  Context as RangeContext,
  RangeContextProps,
} from 'components/Calendar/Context'

import { CellContent, RangeSelectCell } from './styled'
import { Props } from 'components/Calendar/SingleSelect/Cell'

const RangeSelect = ({ date, $isInMonth, ...rest }: Props) => {
  const { isDateValid, handleSelect, getPosition, handleHoverDate } =
    useContext(RangeContext as Context<RangeContextProps>)

  const handleClick = () => {
    handleSelect(date)
  }

  const handleHover = () => {
    handleHoverDate(date)
  }

  return (
    <RangeSelectCell
      data-testid={'range-select'}
      $isInvalid={!isDateValid(date)}
      $position={getPosition(date)}
      onClick={handleClick}
      onMouseEnter={handleHover}
      $isInMonth={$isInMonth}
      {...rest}
    >
      <CellContent>
        <BaseContent date={date} />
      </CellContent>
    </RangeSelectCell>
  )
}

export default RangeSelect

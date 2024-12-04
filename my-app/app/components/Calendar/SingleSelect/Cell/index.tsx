import { Context, useContext } from 'react'

// Components
import { BaseContent } from 'components/Calendar/Base/Cell'

// Context
import {
  Context as SingleContext,
  ContextProps,
} from 'components/Calendar/Context'

import { SingleSelectCell } from './styled'

export interface Props {
  date: string
  $isInMonth: boolean
}

const SingleSelect = ({ date, ...rest }: Props) => {
  const { isDateValid, handleSelect, isSelected } = useContext(
    SingleContext as Context<ContextProps>,
  )

  const handleClick = () => {
    handleSelect(date)
  }
  return (
    <SingleSelectCell
      data-testid={'single-select'}
      $isInvalid={!isDateValid(date)}
      onClick={handleClick}
      $isSelected={isSelected(date)}
      {...rest}
    >
      <BaseContent date={date} />
    </SingleSelectCell>
  )
}

export default SingleSelect

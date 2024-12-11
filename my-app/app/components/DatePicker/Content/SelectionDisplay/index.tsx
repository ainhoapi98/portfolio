import { useContext } from 'react'
import dayjs from 'dayjs'

import { DateContainer, RangeDisplay, Wrapper } from './styled'

// Context
import { Context } from 'components/DatePicker/Context'

// Types
import { RangeSelection } from 'types/dates'

export interface Props {
  range: RangeSelection
  onClick?: () => void
}

const SelectionDisplay = ({ range, onClick }: Props) => {
  const { format } = useContext(Context)

  return (
    <Wrapper>
      <RangeDisplay onClick={onClick}>
        <>
          <DateContainer>
            {range && range[0] && <>{dayjs(range[0]).format(format)}</>}
          </DateContainer>
          <span> - </span>
          <DateContainer>
            {range && range[1] && <>{dayjs(range[1]).format(format)}</>}
          </DateContainer>
        </>
      </RangeDisplay>
    </Wrapper>
  )
}

export default SelectionDisplay

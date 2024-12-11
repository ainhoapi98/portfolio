import dayjs from 'dayjs'

// Styles
import { Cell, Date } from './styled'

export { Cell, WeekdayCell } from './styled'

interface Props {
  date: string
  $isInMonth?: boolean
}

export const BaseCell = ({ date, ...rest }: Props) => (
  <Cell {...rest}>
    <BaseContent date={date} />
  </Cell>
)

export const BaseContent = ({ date }: Props) => (
  <Date>{dayjs(date).format('D')}</Date>
)

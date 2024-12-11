import dayjs, { Dayjs } from 'dayjs'

// Components
import Header from 'components/Calendar/Base/Header'
import CalendarBody from 'components/Calendar/Base/CalendarBody'
import WeekHeader from 'components/Calendar/Base/WeekHeader'

// Styles
import { CalendarTable } from './styled'

export interface Props {
  month: Dayjs
  startOfWeek: number // 0: Sunday – 6: Sunday,
  minDate?: string
  maxDate?: string
  onChangeMonth?: (month: Dayjs) => void
  hasPrevNav?: boolean
  hasNextNav?: boolean
}

/**
 * Component rendering a calendar for the selection of a date
 * or a range of dates depending on the value of `isRange`
 *
 * @param month         Starting month
 * @param minDate       Min date to be selected
 * @param maxDate       Max date to be selected
 * @param startOfWeek   Start of week (0: Sunday, 1: Monday)
 * @param onChangeMonth Handler for changing month
 * @param hasPrevNav    Flag for previous month navigation
 * @param hasNextNav    Flag for next month navigation
 * @param rest
 */
const Calendar = ({
  month,
  minDate,
  maxDate,
  startOfWeek,
  onChangeMonth,
  hasPrevNav,
  hasNextNav,
  ...rest
}: Props) => (
  <div {...rest}>
    <Header
      month={month}
      minDate={minDate ? dayjs(minDate) : undefined}
      maxDate={maxDate ? dayjs(maxDate) : undefined}
      onChangeMonth={onChangeMonth}
      hasPrevNav={hasPrevNav!}
      hasNextNav={hasNextNav!}
    />
    <CalendarTable>
      <WeekHeader startOfWeek={startOfWeek} />
      <CalendarBody month={month} startOfWeek={startOfWeek} />
    </CalendarTable>
  </div>
)

export default Calendar

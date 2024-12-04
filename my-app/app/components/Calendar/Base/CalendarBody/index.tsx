import dayjs, { Dayjs } from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import week from 'dayjs/plugin/weekOfYear'
// Types
import WeekRow from '../WeekRow'

dayjs.extend(isSameOrBefore)
dayjs.extend(week)

/**
 * Renders the body of a calendar with one row per week,
 * which has days inside this week. When the first or last days
 * of the month does not fill up the whole week, the weeks are padded
 * with dates from the previous and next months
 *
 * @param   props  Component's properties
 */
const CalendarBody = ({
  month,
  startOfWeek,
  ...restProps
}: {
  month: Dayjs
  startOfWeek: number
}) => {
  const monthStart = month.startOf('month')
  const monthEnd = month.endOf('month')

  let currentWeek = monthStart

  // Spin back to the first date before the start which
  // corresponds to the month start
  while (currentWeek.day() !== startOfWeek) {
    currentWeek = currentWeek.subtract(1, 'day')
  }

  const rows: Array<JSX.Element> = []
  let i = 0 // Grants an unique key
  while (currentWeek.isSameOrBefore(monthEnd)) {
    rows.push(
      <WeekRow
        key={`${currentWeek.week()}_${i}`}
        monthStart={monthStart}
        monthEnd={monthEnd}
        weekStart={currentWeek}
        {...restProps}
      />,
    )
    i += 1
    currentWeek = currentWeek.add(1, 'week')
  }

  return <tbody>{rows}</tbody>
}

export default CalendarBody

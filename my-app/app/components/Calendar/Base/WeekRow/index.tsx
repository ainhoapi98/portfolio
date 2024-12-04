import { useContext } from 'react'
import range from 'lodash/range'
import dayjs, { Dayjs } from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
// Components
import { Context } from 'components/Calendar/Context'
import { BaseCell } from 'components/Calendar/Base/Cell'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

interface WeekRowProp {
  monthStart: Dayjs
  monthEnd: Dayjs
  weekStart: Dayjs
}

/**
 * Renders a week as a row containing cells for each day of the week.
 * The `onClick` and `onMouseEnter` handlers are only registered when the
 * cell represents a valid date.
 * This component will render a different cell if the context provides one, which
 * gives a specialized functionality for the calendar (single select, range select...)
 *
 * @param monthStart  Start of the month
 * @param monthEnd    End of the month
 * @param weekStart   Start of current week to be rendered
 */
const WeekRow = ({ monthStart, monthEnd, weekStart }: WeekRowProp) => {
  const { cellComponent } = useContext(Context)

  const FinalCell = cellComponent ? cellComponent : BaseCell

  return (
    <tr>
      {range(0, 7).map(dayOffset => {
        const date = weekStart.add(dayOffset, 'days')
        const formattedDate = date.format('YYYY-MM-DD')
        const isInMonth =
          date.isSameOrAfter(monthStart) && date.isSameOrBefore(monthEnd)

        return (
          <FinalCell
            key={formattedDate}
            aria-label={formattedDate}
            date={formattedDate}
            $isInMonth={isInMonth}
          />
        )
      })}
    </tr>
  )
}
export default WeekRow

import range from 'lodash/range'
import dayjs from 'dayjs'

import {WeekdayCell as Cell} from 'components/Calendar/Base/Cell/styled'

/**
 * Renders the calendar table head containing the weekday names
 * starting with `startOfWeek`
 *
 * @param     props
 */
const WeekHeader = ({ startOfWeek }: { startOfWeek: number }) => (
  <thead>
    <tr>
      {range(0, 7).map(offset => {
        const date = dayjs().day(startOfWeek).add(offset, 'days')

        return (
          <Cell key={date.day()} scope={'col'}>
            {date.format('dd')}
          </Cell>
        )
      })}
    </tr>
  </thead>
)

export default WeekHeader

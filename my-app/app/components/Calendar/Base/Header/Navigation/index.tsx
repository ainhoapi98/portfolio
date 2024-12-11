import dayjs, {Dayjs} from 'dayjs'
import {MouseEventHandler} from 'react'
import {faChevronLeft, faChevronRight,} from '@fortawesome/free-solid-svg-icons'

import IconButton from 'components/IconButton'

/**
 * Navigation chevron for the navigation in the past.
 * When `minDate` is set and the previous month is outside the valid range,
 * the button is disabled. `onChange` is called with the previous month, when it is valid.
 *
 * @param     props
 */
export const NavigationChevronPrev = ({
  month,
  minDate,
  onChange,
}: {
  month: Dayjs
  minDate?: Dayjs
  onChange: (month: Dayjs) => void
}) => (
  <NavigationChevron
    isDisabled={
      !!minDate &&
      dayjs(month!)
        .subtract(1, 'months')
        .isBefore(dayjs(minDate).startOf('month'))
    }
    onClick={() => onChange(month.subtract(1, 'month'))}
  />
)

/**
 * Navigation chevron for the navigation in the future.
 * When `maxDate` is set and the next month is outside the valid range,
 * the button is disabled. `onChange` is called with the next month, when it is valid.
 *
 * @param     props
 */
export const NavigationChevronNext = ({
  month,
  maxDate,
  onChange,
}: {
  month: Dayjs
  maxDate?: Dayjs
  onChange: (value: Dayjs) => void
}) => (
  <NavigationChevron
    isDisabled={
      !!maxDate &&
      dayjs(month).add(1, 'months').isAfter(dayjs(maxDate).endOf('month'))
    }
    isRight={true}
    onClick={() => onChange(month.add(1, 'month'))}
  />
)

/**
 * UI component rendering a navigation chevron for the `<CalendarGroup />`
 * By default the chevron icon points to the left unless `isRight` is set.
 *
 * @param     props
 */
const NavigationChevron = ({
  isDisabled,
  isRight,
  onClick,
}: {
  isDisabled: boolean
  isRight?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}) => (
  <IconButton
    disabled={isDisabled}
    onClick={onClick}
    data-testid={'calendar-navigation'}
    icon={isRight ? faChevronRight : faChevronLeft}
  />
)

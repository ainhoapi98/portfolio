// Components
import CalendarGroup, { Props as CalendarProps } from '../CalendarGroup'
import Cell from './Cell'

// Contexts
// Types
import RangeSelectContext, {
  ContextProps,
} from 'components/Calendar/Context/RangeSelect'
import { RangeSelection } from 'types/dates'

export interface Props {
  value: RangeSelection
  minDate?: CalendarProps['minDate']
  maxDate?: CalendarProps['maxDate']
  numberCalendars: CalendarProps['numberCalendars']
  startOfWeek?: CalendarProps['startOfWeek']
  maxDays?: ContextProps['maxDays']
  onSelectUpdate: ContextProps['onSelectUpdate']
  resetSignal?: ContextProps['resetSignal']
}

/**
 * Range Select calendar is used for situations in which the user should select
 * two dates that are consider a sequential selection ( a rage of dates).
 *
 * Component wraps DailyFeedContext, RangeSelectContext and a CalendarGroup.
 *
 * @param value
 * @param minDate
 * @param maxDate
 * @param numberCalendars
 * @param startOfWeek
 * @param maxDays
 * @param onSelectUpdate
 * @param resetSignal
 */
const RangeSelect = ({
  value,
  minDate,
  maxDate,
  numberCalendars,
  startOfWeek,
  maxDays,
  onSelectUpdate,
  resetSignal,
}: Props) => (
  <RangeSelectContext
    minValidDate={minDate}
    maxValidDate={maxDate}
    cellComponent={Cell}
    onSelectUpdate={onSelectUpdate}
    maxDays={maxDays}
    initValue={value}
    resetSignal={resetSignal}
  >
    <CalendarGroup
      numberCalendars={numberCalendars}
      minDate={minDate}
      maxDate={maxDate}
      startOfWeek={startOfWeek}
    />
  </RangeSelectContext>
)

export default RangeSelect

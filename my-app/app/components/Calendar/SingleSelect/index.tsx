// Components
import CalendarGroup, {
  Props as CalendarProps,
} from 'components/Calendar/CalendarGroup'
import SingleSelectContext from 'components/Calendar/Context/SingleSelect'
import Cell from './Cell'

// Types
import { Props as ContextProps } from 'components/Calendar/Context'

export type Props = ContextProps & CalendarProps

/**
 * Single Select calendar component used to single-date selection.
 *
 * Component wraps SingleSelectContext and a CalendarGroup.
 *
 * @param initValue
 * @param numberCalendars
 * @param startOfWeek
 * @param minDate
 * @param maxDate
 * @param onSelectUpdate
 */
const SingleSelect = ({
  initValue,
  numberCalendars,
  startOfWeek,
  minDate,
  maxDate,
  onSelectUpdate,
}: Props) => (
  <SingleSelectContext
    initValue={initValue}
    minValidDate={minDate}
    maxValidDate={maxDate}
    cellComponent={Cell}
    onSelectUpdate={onSelectUpdate}
  >
    <CalendarGroup
      numberCalendars={numberCalendars}
      startOfWeek={startOfWeek}
      minDate={minDate}
      maxDate={maxDate}
    />
  </SingleSelectContext>
)

export default SingleSelect

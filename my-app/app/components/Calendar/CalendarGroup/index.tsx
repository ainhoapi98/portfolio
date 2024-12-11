import { useEffect, useState } from 'react'
import range from 'lodash/range'
import dayjs, { Dayjs } from 'dayjs'

// Components
import Calendar from 'components/Calendar/Base'

// Styles
import { Container } from './styled'

export interface Props {
  numberCalendars: number
  initMonth?: string
  minDate?: string
  maxDate?: string
  startOfWeek?: number
  onChangeMonth?: (month: string) => void
}

/**
 * Calendar Group component puts multiple calendars side-by-side and coordinates
 * the "navigation" between months.
 *
 * @param month             Starting month
 * @param numberCalendars   Number of calendars to be rendered
 * @param startOfWeek       Start of week (0: Sunday, 1: Monday)
 * @param minDate           Min date to be selected
 * @param maxDate           Max date to be selected
 * @param onChangeMonth     Callback function called once the navigation changes the base month
 */
const CalendarGroup = ({
  numberCalendars = 2,
  startOfWeek = 1,
  initMonth,
  minDate,
  maxDate,
  onChangeMonth,
}: Props) => {
  const [month, setMonth] = useState<Dayjs>(dayjs(initMonth).startOf('month'))

  const handleChangeMonth = (_month: Dayjs) => {
    const newMonth =
      numberCalendars === 2 && _month.isBefore(month)
        ? _month.subtract(1, 'month')
        : _month

    setMonth(newMonth)
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
    // onNavigateMonth &&
    //   onNavigateMonth(_month.format('YYYY-MM-DD'), _month.isBefore(month))
  }

  useEffect(() => setMonth(dayjs(initMonth).startOf('month')), [initMonth])

  useEffect(() => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
    onChangeMonth && onChangeMonth(month.format('YYYY-MM-DD'))
  }, [month])

  /**
   * Renders `numberCalendars` calendar components starting with `month` and then
   * with the subsequent months. The first calendar is passed a `onChangeMonth` callback,
   * which causes it to render a `<MonthSelect />`
   */
  const renderCalendars = () =>
    range(0, numberCalendars).map(offset => {
      const calendarMonth = month.add(offset, 'months')

      return (
        <Calendar
          data-testid={'calendar'}
          key={calendarMonth.format('YYYY-MM-DD')}
          aria-label={calendarMonth.format('MMMM YYYY')}
          month={calendarMonth}
          onChangeMonth={
            offset === 0 || offset === numberCalendars - 1
              ? handleChangeMonth
              : undefined
          }
          startOfWeek={startOfWeek}
          minDate={minDate}
          maxDate={maxDate}
          hasPrevNav={offset === 0}
          hasNextNav={offset === numberCalendars - 1}
        />
      )
    })

  return (
    <Container data-testid={'calendar-group'}>{renderCalendars()}</Container>
  )
}

export default CalendarGroup

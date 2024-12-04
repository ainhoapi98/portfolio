import { Dayjs } from 'dayjs'

import { NavigationChevronNext, NavigationChevronPrev } from './Navigation'
import MonthSelect from './MonthSelect'
import { HeaderContainer, LabelMonth, NavigationContainer } from './styled'

/**
 * Renders the label for the calendar. When `onChangeMonth` is passed,
 * a month dropdown is rendered, otherwise a static label
 *
 * @param   props  Component's properties
 */
const Header = ({
  month,
  onChangeMonth,
  minDate,
  maxDate,
  hasPrevNav,
  hasNextNav,
}: {
  month: Dayjs
  onChangeMonth?: (month: Dayjs) => void
  minDate?: Dayjs
  maxDate?: Dayjs
  hasPrevNav: boolean
  hasNextNav: boolean
}) => (
  <HeaderContainer data-testid={'calendar-label'}>
    {onChangeMonth ? (
      <NavigationContainer $positionEnd={!hasPrevNav && hasNextNav}>
        {hasPrevNav && (
          <>
            <NavigationChevronPrev
              month={month}
              minDate={minDate}
              onChange={onChangeMonth}
            />
            <MonthSelect
              value={month}
              onChange={onChangeMonth}
              minDate={minDate}
              maxDate={maxDate}
            />
            {hasNextNav && (
              <NavigationChevronNext
                month={month}
                maxDate={maxDate}
                onChange={onChangeMonth}
              />
            )}
          </>
        )}
        {hasNextNav && !hasPrevNav && (
          <>
            <LabelMonth>{month.format('MMMM')}</LabelMonth>
            <NavigationChevronNext
              month={month}
              maxDate={maxDate}
              onChange={onChangeMonth}
            />
          </>
        )}
      </NavigationContainer>
    ) : (
      <LabelMonth>{month.format('MMMM')}</LabelMonth>
    )}
  </HeaderContainer>
)

export default Header

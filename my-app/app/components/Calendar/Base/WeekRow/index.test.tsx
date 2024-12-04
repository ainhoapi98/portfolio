import { render } from '@testing-library/react'
import mockdate from 'mockdate'
import dayjs from 'dayjs'

// Components
import WeekRow from './index'

// Context
import { Context } from 'components/Calendar/Context'

describe('Components > Calendars > Base > WeekRow', () => {
  beforeEach(() => {
    mockdate.set('2023-07-03')
  })

  afterEach(() => {
    mockdate.reset()
  })

  it('should render the WeekRow component with the regular Cell', () => {
    const { queryAllByTestId, getAllByRole } = render(
      <WeekRow
        monthStart={dayjs('2023-01-01')}
        monthEnd={dayjs('2024-01-01')}
        weekStart={dayjs()}
      />,
    )

    expect(getAllByRole('cell')).toHaveLength(7)
    expect(queryAllByTestId('special-cell')).toHaveLength(0)
  })

  it('should render the WeekRow component with the special Cell', () => {
    const SpecialCell = () => <span data-testid={'special-cell'}>1</span>

    const { getAllByTestId } = render(
      <Context.Provider
        value={{
          isDateValid: () => true,
          isSelected: () => false,
          handleSelect: () => undefined,
          cellComponent: SpecialCell,
        }}
      >
        <WeekRow
          monthStart={dayjs('2023-01-01')}
          monthEnd={dayjs('2024-01-01')}
          weekStart={dayjs()}
        />
      </Context.Provider>,
    )

    expect(getAllByTestId('special-cell')).toHaveLength(7)
  })
})

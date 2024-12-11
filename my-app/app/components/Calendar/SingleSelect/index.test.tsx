import userEvent from '@testing-library/user-event'
import mockdate from 'mockdate'
import { render } from '@testing-library/react'

import SingleSelectCalendar from './index'
import { Colors } from '../../../styles'

describe('Single Select Calendar', () => {
  beforeEach(() => mockdate.set('2023-07-05'))
  afterEach(() => mockdate.reset())

  it('should render 2 calendars with single select cells', () => {
    const { getAllByTestId } = render(
      <SingleSelectCalendar
        initValue={[null]}
        minDate={'2023-07-01'}
        maxDate={'2023-09-01'}
        numberCalendars={2}
        startOfWeek={1}
      />,
    )

    expect(getAllByTestId('calendar')).toHaveLength(2)
    expect(getAllByTestId('single-select')).toHaveLength(77)
  })

  it('should render the calendars with the default value selected', () => {
    const { getByLabelText } = render(
      <SingleSelectCalendar
        initValue={['2023-07-03']}
        minDate={'2023-07-01'}
        maxDate={'2023-09-01'}
        numberCalendars={2}
        startOfWeek={1}
      />,
    )

    const cell1 = getByLabelText('2023-07-03')
    expect(cell1).toHaveStyleRule(
      'background-color',
      Colors.background.secondarySubtle,
    )
    expect(cell1).toHaveStyleRule('color', mockTheme.color.text.default)
    expect(cell1).toHaveStyleRule(
      'border',
      `1px solid ${mockTheme.color.border.active}`,
    )
  })

  it('should allow to select only one cell at a time', async () => {
    const onSelectUpdate = jest.fn()
    const { getByLabelText } = render(
      <ThemeProvider theme={mockTheme}>
        <SingleSelectCalendar
          initValue={[null]}
          minDate={'2023-07-01'}
          maxDate={'2023-09-01'}
          onSelectUpdate={onSelectUpdate}
          numberCalendars={2}
          startOfWeek={1}
        />
      </ThemeProvider>,
    )

    const cell1 = getByLabelText('2023-07-14')

    expect(cell1).toHaveStyleRule('color', mockTheme.color.text.default)
    await userEvent.click(cell1)

    // Should get selected
    expect(cell1).toHaveStyleRule(
      'background-color',
      mockTheme.color.background.accentSubtle,
    )
    expect(cell1).toHaveStyleRule('color', mockTheme.color.text.default)
    expect(cell1).toHaveStyleRule(
      'border',
      `1px solid ${mockTheme.color.border.active}`,
    )
    expect(onSelectUpdate).toHaveBeenCalledWith(['2023-07-14'])

    const cell2 = getByLabelText('2023-07-16')

    // Now Cell2 should be selected and Cell1 unselected
    await userEvent.click(cell2)
    expect(cell1).not.toHaveStyleRule(
      'border',
      `1px solid ${mockTheme.color.border.active}`,
    )
    expect(cell2).toHaveStyleRule(
      'border',
      `1px solid ${mockTheme.color.border.active}`,
    )
    expect(onSelectUpdate).toHaveBeenCalledWith(['2023-07-16'])
  })

  it('should not allow to select a cell outside the min and max range', () => {
    const onSelectUpdate = jest.fn()

    const { getByLabelText } = render(
      <ThemeProvider theme={mockTheme}>
        <SingleSelectCalendar
          initValue={[null]}
          minDate={'2023-07-01'}
          maxDate={'2023-07-30'}
          onSelectUpdate={onSelectUpdate}
          numberCalendars={2}
          startOfWeek={1}
        />
      </ThemeProvider>,
    )

    const cell = getByLabelText('2023-08-10')

    expect(cell).toHaveStyleRule('color', mockTheme.color.text.subtle)

    userEvent.click(cell)
    expect(onSelectUpdate).not.toHaveBeenCalledWith('2023-08-10')
  })
})

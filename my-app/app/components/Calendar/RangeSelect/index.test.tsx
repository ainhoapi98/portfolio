import userEvent from '@testing-library/user-event'
import mockdate from 'mockdate'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import RangeSelect from './index'

// Types
import { Theme } from '@resources/styles'

describe('Range Select Calendar', () => {
  beforeEach(() => mockdate.set('2023-07-05'))
  afterEach(() => mockdate.reset())

  const mockTheme = {
    color: {
      text: {
        default: 'darkblue',
        inverted: 'white',
        subtle: 'light',
      },
      feed: {
        option2: 'blue',
        option1: 'orange',
      },
      background: {
        accentSubtle: 'blue',
        accentDefault: 'orange',
      },
      border: {
        default: 'grey',
      },
      icon: {
        default: 'yellow',
      },
    },
    font: {
      size150: {
        regular: 'medium normal',
      },
      size175: {
        regular: '175 normal',
      },
      size225: {
        regular: 'large normal',
      },
    },
    spacing: {
      size25: '10',
      size200: '16',
    },
    icon: {
      size200: 10,
    },
    corner: {
      size25: '5px',
    },
    width: {
      size3000: '192px',
    },
    height: {
      size400: '64px',
    },
    shadow: {
      inner: 'inner',
    },
  } as Theme

  it('should render 2 calendars with range select cells', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <RangeSelect
          value={[null, null]}
          minDate={'2023-07-01'}
          maxDate={'2023-09-01'}
          numberCalendars={2}
          onSelectUpdate={() => null}
        />
      </ThemeProvider>,
    )

    expect(getAllByTestId('calendar')).toHaveLength(2)
    expect(getAllByTestId('range-select')).toHaveLength(77)
  })

  it('should select start and end dates and color them accordingly', async () => {
    const onSelectUpdate = jest.fn()

    const { getByLabelText } = render(
      <ThemeProvider theme={mockTheme}>
        <RangeSelect
          value={[null, null]}
          minDate={'2023-07-01'}
          maxDate={'2023-09-01'}
          numberCalendars={2}
          onSelectUpdate={onSelectUpdate}
        />
      </ThemeProvider>,
    )

    const cell1 = getByLabelText('2023-07-06')
    expect(cell1).toHaveStyleRule('color', mockTheme.color.text.default)

    // Select Range start
    await userEvent.click(cell1)
    expect(cell1).toHaveStyleRule(
      'border-radius',
      `${mockTheme.corner.size25} 0 0 ${mockTheme.corner.size25}`,
    )
    expect(cell1).toHaveStyleRule(
      'background-color',
      mockTheme.color.background.accentSubtle,
    )
    expect(onSelectUpdate).toHaveBeenCalledWith(['2023-07-06', null])

    // Hover on next cell and color cells between hover and start
    const cell2 = getByLabelText('2023-07-10')
    await userEvent.hover(cell2)
    expect(getByLabelText('2023-07-08')).toHaveStyleRule(
      'background-color',
      mockTheme.color.background.accentSubtle,
    )
    // Select Range end
    await userEvent.click(cell2)
    expect(cell2).toHaveStyleRule(
      'border-radius',
      `0 ${mockTheme.corner.size25} ${mockTheme.corner.size25} 0`,
    )
    expect(cell2).toHaveStyleRule(
      'background-color',
      mockTheme.color.background.accentSubtle,
    )
    expect(onSelectUpdate).toHaveBeenCalledWith(['2023-07-06', '2023-07-10'])
  })

  it('should not allow to select an end date that is before the selected start date', async () => {
    const onSelectUpdate = jest.fn()

    const { getByLabelText } = render(
      <ThemeProvider theme={mockTheme}>
        <RangeSelect
          value={[null, null]}
          minDate={'2023-07-01'}
          maxDate={'2023-09-01'}
          numberCalendars={2}
          onSelectUpdate={onSelectUpdate}
        />
      </ThemeProvider>,
    )

    const cell1 = getByLabelText('2023-07-06')
    const cell2 = getByLabelText('2023-07-04')

    // Both cells are active
    expect(cell1).toHaveStyleRule('color', mockTheme.color.text.default)
    expect(cell2).toHaveStyleRule('color', mockTheme.color.text.default)

    // Select Range start
    await userEvent.click(cell1)

    expect(cell1).toHaveStyleRule(
      'border-radius',
      `${mockTheme.corner.size25} 0 0 ${mockTheme.corner.size25}`,
    )
    expect(cell1).toHaveStyleRule(
      'background-color',
      mockTheme.color.background.accentSubtle,
    )

    // Cell2 should now be disabled since its before start date
    expect(cell2).not.toHaveStyleRule('color', mockTheme.color.text.inverted)
    expect(cell2).toHaveStyleRule('color', mockTheme.color.text.subtle)

    expect(getByLabelText('2023-07-05')).toHaveStyleRule(
      'color',
      mockTheme.color.text.subtle,
    )

    expect(onSelectUpdate).toHaveBeenCalledWith(['2023-07-06', null])
  })

  it('should not allow to select a wider range than the one specified by maxDays', async () => {
    const onSelectUpdate = jest.fn()

    const { getByLabelText } = render(
      <ThemeProvider theme={mockTheme}>
        <RangeSelect
          value={[null, null]}
          minDate={'2023-07-01'}
          maxDate={'2023-09-01'}
          numberCalendars={2}
          maxDays={3}
          onSelectUpdate={onSelectUpdate}
        />
      </ThemeProvider>,
    )

    const cell1 = getByLabelText('2023-07-06')
    const cell2 = getByLabelText('2023-07-10')
    // Both cells are active
    expect(cell1).toHaveStyleRule('color', mockTheme.color.text.default)
    expect(cell2).toHaveStyleRule('color', mockTheme.color.text.default)

    // Select Range start
    await userEvent.click(cell1)

    expect(cell1).toHaveStyleRule(
      'border-radius',
      `${mockTheme.corner.size25} 0 0 ${mockTheme.corner.size25}`,
    )
    expect(cell1).toHaveStyleRule(
      'background-color',
      mockTheme.color.background.accentSubtle,
    )

    // Since Cell2 is further away than maxDays, it can not be selected
    expect(cell2).toHaveStyleRule('color', mockTheme.color.text.subtle)
    expect(onSelectUpdate).toHaveBeenCalledWith(['2023-07-06', null])
  })
})

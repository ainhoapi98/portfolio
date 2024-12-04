import mockdate from 'mockdate'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

// Components
import CalendarGroup from './index'

// Types
import { Theme } from '@resources/styles'

describe('Components > Calendars > CalendarGroup', () => {
  beforeEach(() => mockdate.set('2023-07-05'))
  afterEach(() => mockdate.reset())

  it('should render 3 calendars with basic cells', () => {
    const mockTheme = {
      color: {
        background: {
          default: 'white',
        },
        text: {
          default: 'darkblue',
        },
        border: {
          active: 'hotpink',
        },
        icon: {
          default: 'yellow',
        },
      },
      font: {
        size150: {
          regular: 'md normal',
        },
        size175: {
          regular: '175 normal',
        },
        size225: {
          regular: 'large normal',
        },
      },
      spacing: { size25: '10' },
      icon: {
        size200: 10,
      },
      width: {
        size3000: '60px',
      },
      corner: {
        size50: '12px',
      },
      height: {
        size400: '36px',
      },
      shadow: {
        inner: 'inner',
      },
    } as Theme

    const props = {
      initValue: [null, null],
      onChangeMonth: jest.fn(),
      numberCalendars: 3,
      startOfWeek: 1,
      minDate: '2023-07-01',
      maxDate: '2023-09-01',
    }
    const { getAllByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <CalendarGroup {...props} />
      </ThemeProvider>,
    )

    expect(getAllByTestId('calendar')).toHaveLength(3)
  })
})

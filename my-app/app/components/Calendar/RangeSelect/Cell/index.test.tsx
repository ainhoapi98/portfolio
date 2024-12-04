import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

// Components
import RangeSelect from './index'

// Context
import RangeSelectContext from 'elements/Calendars/Context/RangeSelect'

// Types
import { Theme } from '@resources/styles'

describe('Components > Calendars > RangeSelect', () => {
  const mockTheme = {
    font: {
      size150: { regular: 'medium regular', semibold: 'medium semibold' },
    },
    color: {
      text: {
        default: 'darkblue',
        subtle: 'gray',
      },
      border: {
        active: 'navy',
      },
      feed: {
        option2: 'blue',
        option1: 'orange',
      },
      background: {
        accentSubtle: 'blue',
      },
    },
    corner: {
      size25: '4px',
    },
    spacing: {
      size50: '8px',
    },
    width: {
      size3000: '192px',
    },
    height: {
      size400: '64px',
    },
  } as Theme

  it('should render the range select cell and should be valid', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <RangeSelectContext
          minValidDate={'2023-05-05'}
          maxValidDate={'2023-05-18'}
          cellComponent={RangeSelect}
          onSelectUpdate={() => null}
          initValue={[null, null]}
        >
          <RangeSelect date={'2023-05-08'} $isInMonth={true} />
        </RangeSelectContext>
      </ThemeProvider>,
    )

    const cell = getByTestId('range-select')
    expect(cell).toBeInTheDocument()
    expect(cell).not.toHaveStyleRule('pointer-events', 'none')
    expect(cell).toHaveStyleRule('cursor', 'pointer')
  })

  it('should render the range select cell and should be invalid', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <RangeSelectContext
          minValidDate={'2023-05-05'}
          maxValidDate={'2023-05-18'}
          onSelectUpdate={() => null}
          cellComponent={RangeSelect}
          initValue={[null, null]}
        >
          <RangeSelect date={'2023-05-04'} $isInMonth={true} />
        </RangeSelectContext>
      </ThemeProvider>,
    )

    const cell = getByTestId('range-select')
    expect(cell).toBeInTheDocument()
    expect(cell).toHaveStyleRule('pointer-events', 'none')
  })

  it('should select cell on click by calling the handler provided by the context', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <RangeSelectContext
          minValidDate={'2023-05-05'}
          maxValidDate={'2023-05-18'}
          onSelectUpdate={() => null}
          cellComponent={RangeSelect}
          initValue={[null, null]}
        >
          <RangeSelect date={'2023-05-06'} $isInMonth={true} />
        </RangeSelectContext>
      </ThemeProvider>,
    )

    const cell = getByTestId('range-select')
    expect(cell).toBeInTheDocument()
    await userEvent.click(cell)

    expect(cell).toHaveStyleRule(
      'border',
      `1px solid ${mockTheme.color.border.active}`,
    )
  })
})

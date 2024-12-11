import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

// Context
import SingleSelectContext from 'elements/Calendars/Context/SingleSelect'

// Components
import SingleSelect from './index'

// Types
import { Theme } from '@resources/styles'

describe('Components > Calendars > SingleSelect', () => {
  const mockTheme = {
    font: {
      size150: { regular: 'medium regular', semibold: 'medium semibold' },
    },
    color: {
      text: { default: 'darkBlue', subtle: 'gray' },
      border: { active: 'navy' },
      background: { accentSubtle: 'blue' },
    },
    width: {
      size3000: '192px',
    },
    height: {
      size400: '64px',
    },
  } as Theme

  it('should render the single select cell and should be valid', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <SingleSelectContext
          initValue={[null]}
          minValidDate={'2023-05-05'}
          maxValidDate={'2023-05-18'}
        >
          <SingleSelect date={'2023-05-08'} $isInMonth={true} />
        </SingleSelectContext>
      </ThemeProvider>,
    )

    const cell = getByTestId('single-select')
    expect(cell).toBeInTheDocument()
    expect(cell).not.toHaveStyleRule('pointer-events', 'none')
    expect(cell).toHaveStyleRule('cursor', 'pointer')
  })

  it('should render the single select cell and should be invalid', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <SingleSelectContext
          initValue={[null]}
          minValidDate={'2023-05-05'}
          maxValidDate={'2023-05-18'}
        >
          <SingleSelect date={'2023-05-04'} $isInMonth={true} />
        </SingleSelectContext>
      </ThemeProvider>,
    )

    const cell = getByTestId('single-select')
    expect(cell).toBeInTheDocument()
    expect(cell).toHaveStyleRule('pointer-events', 'none')
  })

  it('should select cell on click by calling the handler provided by the context', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <SingleSelectContext
          initValue={[null]}
          minValidDate={'2023-05-05'}
          maxValidDate={'2023-05-18'}
        >
          <SingleSelect date={'2023-05-07'} $isInMonth={true} />
        </SingleSelectContext>
      </ThemeProvider>,
    )

    const cell = getByTestId('single-select')
    expect(cell).toBeInTheDocument()
    await userEvent.click(cell)

    expect(cell).toHaveStyleRule(
      'border',
      `1px solid ${mockTheme.color.border.active}`,
    )
    expect(cell).toHaveStyleRule(
      'background-color',
      mockTheme.color.background.accentSubtle,
    )
  })
})

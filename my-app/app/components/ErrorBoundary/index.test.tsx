import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

// Utils
import ErrorBoundary from './index'
import { Theme } from '@resources/styles'
import { IntlProvider } from 'react-intl'

const ProblemChild = () => {
  throw new Error('Error thrown from problem child')
  return <div>Error</div>  
}

const OkChild = () => <span>oi</span>

jest.mock('uuid', () => ({
  v4: () => '123-abc',
}))

describe('ErrorBoundary > ', () => {
  const testTheme = {
    spacing: {
      size200: '16px',
    },
    font: {
      size175: {
        regular: 'regular 175',
        semibold: 'semibold 175',
      },
      size125: {
        regular: 'regular 125',
        semibold: 'semibold 125',
      },
    },
  } as Theme

  it('should render the component', () => {
    const { container, getByText } = render(
      <ErrorBoundary
        errorMessageTag={'TEST ERROR'}
        fallback={uuid => (
          <>
            Fall back component, <span>{uuid}</span>
          </>
        )}
      >
        <ProblemChild />
      </ErrorBoundary>,
    )

    expect(getByText('123-abc')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should not detect an error', () => {
    jest.clearAllMocks()
    const { container } = render(
      <ErrorBoundary
        errorMessageTag={'TEST ERROR'}
        fallback={uuid => <>Fall back component, {uuid}</>}
      >
        <OkChild />
      </ErrorBoundary>,
    )
    expect(container).toHaveTextContent('oi')
  })

  it('should render the component with default tag and message', () => {
    const { container, getByText } = render(
      <IntlProvider locale={'en'}>
        <ThemeProvider theme={testTheme}>
          <ErrorBoundary>
            <ProblemChild />
          </ErrorBoundary>
        </ThemeProvider>
      </IntlProvider>,
    )

    expect(getByText('oops...something went wrong!')).toBeInTheDocument()
    // Mocked uuid
    expect(
      getByText('An unexpected error occurred. Error ID: 123-abc.'),
    ).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})

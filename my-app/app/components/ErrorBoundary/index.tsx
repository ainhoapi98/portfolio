import { ErrorInfo, PropsWithChildren, PureComponent, ReactNode } from 'react'
import { v4 } from 'uuid'
import ErrorContent from './Content'

interface Props {
  errorMessageTag?: string
  fallback?: (uuid: string) => ReactNode
}

interface State {
  hasError: boolean
  uuid: string | null
}

/**
 * Error boundary component catching errors in the subtree.
 * When an error occurs the `<ErrorMessage />` is rendered instead of
 * the `children` and the error is logged.
 */
export default class ErrorBoundary extends PureComponent<
  PropsWithChildren<Props>,
  State
> {
  constructor(props: PropsWithChildren<Props>) {
    super(props)

    this.state = {
      hasError: false,
      uuid: null,
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const uuid = v4()
    console.error('Error occurred', error, info, 'uuid: ', uuid)

    this.setState({
      hasError: true,
      uuid,
    })
  }

  render() {
    const { hasError, uuid } = this.state
    /* eslint-disable-next-line react/prop-types */
    const { children, fallback } = this.props

    if (hasError) {
      return fallback ? (
        /* eslint-disable-next-line react/prop-types */
        fallback.call({}, uuid ?? '')
      ) : (
        <ErrorContent uuid={uuid} />
      )
    }

    return children
  }
}

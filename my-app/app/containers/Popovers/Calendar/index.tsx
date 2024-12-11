// Components
import ErrorBoundary from 'components/ErrorBoundary'
import { Container } from './styled'
import Content from './Content'

// Hooks
import usePopoversContext from 'hooks/usePopoversContext'
import { setIsOpen } from 'reducers/popovers'
import { PopoverType } from 'types/popovers'

const CalendarPopover = () => {
  const { refs, getFloatingProps } = usePopoversContext()
  const handleClosePopover = () => setIsOpen(false, PopoverType.Calendar)

  return (
    <ErrorBoundary>
      <Container ref={refs.setFloating} {...getFloatingProps()}>
        <Content handleClose={handleClosePopover} />
      </Container>
    </ErrorBoundary>
  )
}

export default CalendarPopover

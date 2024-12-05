import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'

// Components
import ErrorBoundary from 'components/ErrorBoundary'
import Content from './Content'

// Types
import { Modals } from 'types/modals'

// IO
import { setIsOpen } from 'reducers/modals'
import { Container } from './styled'

// Styled

const ToDoItem = forwardRef(function _DatePicker(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const handleCloseModal = () => setIsOpen(false, Modals.DatePicker)

  return (
    <Container {...props}>
      <ErrorBoundary data-testid={'to-do-item-error'}>
        <Content handleClose={handleCloseModal} />
      </ErrorBoundary>
    </Container>
  )
})

export default ToDoItem

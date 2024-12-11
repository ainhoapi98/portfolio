import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react'
import { forwardRef, HTMLProps } from 'react'

// Types
import { Modals as ModalsTypes } from 'types/modals'

// State
import { getModal } from 'reducers/modals'

// Components
import ToDoItem from './ToDoItem'

// Hooks
import useModalsContext from 'hooks/useModalsContext'

// Styled
import { Overlay } from './styled'

const Modals = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function _Modals(props, propRef) {
    const { context, getFloatingProps, refs } = useModalsContext()
    const ref = useMergeRefs([refs.setFloating, propRef])

    if (!context.open || !getModal().value.isOpen) {
      return null
    }

    return (
      <FloatingPortal>
        <Overlay lockScroll={true} data-testid={'modal-overlay'}>
          <FloatingFocusManager context={context}>
            {(() => {
              switch (getModal().value.modal) {
                case ModalsTypes.ToDoItem:
                  return <ToDoItem ref={ref} {...getFloatingProps(props)} />
                default:
                  return <></>
              }
            })()}
          </FloatingFocusManager>
        </Overlay>
      </FloatingPortal>
    )
  },
)

export default Modals

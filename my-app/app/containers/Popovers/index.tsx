import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'

// State
import { getPopover } from 'reducers/popovers'

// Hooks
import usePopoversContext from 'hooks/usePopoversContext'

// Types
import { PopoverType } from 'types/popovers'

// Components
import Calendar from './Calendar'
import Alert from './Alert'

// Styles
import { Overlay } from './styled'

const Popover = () => {
  const { context } = usePopoversContext()

  if (!context.open || !getPopover().value.isOpen) {
    return null
  }

  return (
    <FloatingPortal>
      <Overlay lockScroll={true} data-testid={'popover-overlay'}>
        <FloatingFocusManager context={context} order={['reference']} disabled>
          {(() => {
            switch (getPopover().value.type) {
              case PopoverType.Calendar:
                return <Calendar />
              case PopoverType.Alert:
                return <Alert />
              default:
                return <></>
            }
          })()}
        </FloatingFocusManager>
      </Overlay>
    </FloatingPortal>
  )
}

export default Popover

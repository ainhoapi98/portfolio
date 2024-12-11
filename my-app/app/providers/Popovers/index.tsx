import { PropsWithChildren } from 'react'

// Hooks
import { useComputed, useSignals } from '@preact/signals-react/runtime'
import usePopover, { PopoverOptions } from 'hooks/usePopover'

// Contexts
import PopoverContext from 'contexts/PopoversContext'

// Reducers
import { getPopover, setIsOpen, setRefKey } from 'reducers/popovers'

function PopoversProvider({
  children,
  ...options
}: PropsWithChildren<PopoverOptions>) {
  useSignals()
  const popover = useComputed(() => getPopover().value)

  const { isOpen, type, params } = popover.value ?? {}

  const onOpenChange = (open: boolean) => {
    setIsOpen(open, type!, params)
    if (!open) {
      setRefKey(null)
    }
  }

  const popovers = usePopover({ ...options, open: isOpen, onOpenChange })

  return (
    <PopoverContext.Provider value={popovers}>
      {children}
    </PopoverContext.Provider>
  )
}

export default PopoversProvider

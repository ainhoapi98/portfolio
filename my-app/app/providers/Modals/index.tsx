import { PropsWithChildren } from 'react'
import { useComputed, useSignals } from '@preact/signals-react/runtime'

// Contexts
import Index from 'contexts/ModalsContext'

// Hooks
import useModals, { ModalsOptions } from 'hooks/useModals'

// Reducers
import { getModal, setIsOpen } from 'reducers/modals'
import { getPopover } from 'reducers/popovers'

function ModalsProvider({
  children,
  ...options
}: PropsWithChildren<ModalsOptions>) {
  useSignals()
  const modal = useComputed(() => getModal().value)
  const modalValue = modal.value
  const { isOpen, modal: modalWindow, params } = modalValue ?? {}
  const popover = getPopover()

  const popoverValue = popover.value

  const onOpenChange = (open: boolean) => {
    if (!open && !popoverValue?.isOpen) {
      setIsOpen(open, modalWindow!, params)
    }
  }

  const modals = useModals({ ...options, open: isOpen, onOpenChange })
  return <Index.Provider value={modals}>{children}</Index.Provider>
}

export default ModalsProvider

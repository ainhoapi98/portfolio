import { useMemo, useState } from 'react'
import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'

export interface ModalsOptions {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  closeOnEscape?: boolean
}

function useModals({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  closeOnEscape = true,
}: ModalsOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    open,
    onOpenChange: setOpen,
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen === null,
  })

  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
    escapeKey: closeOnEscape,
    outsidePress: true,
  })

  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  )
}

export default useModals

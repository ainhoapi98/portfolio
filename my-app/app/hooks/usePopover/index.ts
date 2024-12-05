import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { useMemo, useRef } from 'react'

import { getPlacement } from 'reducers/popovers'

export interface PopoverOptions {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

function usePopover({ open, onOpenChange }: PopoverOptions = {}) {
  const arrowRef = useRef(null)

  const data = useFloating({
    placement: getPlacement(),
    open,
    onOpenChange,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        crossAxis: 0,
        mainAxis: 3,
      }),
      flip(), // Ensures the popover flips if there's not enough space
      shift(),
      arrow({ element: arrowRef }),
    ],
  })

  const context = data.context

  const click = useClick(context, { enabled: true })
  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
    escapeKey: true,
    outsidePress: true,
  })
  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  return useMemo(
    () => ({
      open,
      onOpenChange,
      arrowRef,
      ...interactions,
      ...data,
    }),
    [open, onOpenChange, arrowRef, interactions, data],
  )
}

export default usePopover

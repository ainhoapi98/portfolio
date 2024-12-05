import { Popover, PopoverType } from 'types/popovers' // Utils
import { createSignal } from 'utils/signals'

const [popover, setPopover] = createSignal<Popover>({
  isOpen: false,
  type: PopoverType.Alert,
})

export function getPopover() {
  return popover
}

export function setIsOpen(isOpen: boolean, type: PopoverType, params?: any) {
  setPopover({ isOpen, type, params })
}

export function getPlacement() {
  return popover.peek().params?.placement
}

export function getParams() {
  return popover.peek().params
}

export function setRefKey(refKey: string | null) {
  const popover = getPopover().peek()
  setPopover({
    ...popover,
    params: {
      ...(popover.params as any),
      refKey,
    },
  })
}

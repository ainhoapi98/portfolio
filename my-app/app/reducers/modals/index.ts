// Types
import { Modal, Modals } from 'types/modals'

// Utils
import { createSignal } from 'utils/signals'

const [modal, setModal] = createSignal<Modal>({
  isOpen: false,
  modal: Modals.DatePicker,
})

export function getModal() {
  return modal
}

export function isDatePickerOpen() {
  return modal.value.isOpen && modal.peek().modal === Modals.DatePicker
}

export function setIsOpen(isOpen: boolean, modal: Modals, params?: unknown) {
  setModal({ isOpen, modal, params })
}

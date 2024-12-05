// Types
import { Modal, Modals, ToDoItemParams } from 'types/modals'

// Utils
import { createSignal } from 'utils/signals'

const [modal, setModal] = createSignal<Modal>({
  isOpen: false,
  modal: Modals.DatePicker,
})

export function getModal() {
  return modal
}

export function getParams() {
  return modal.value.params
}

export function isDatePickerOpen() {
  return modal.value.isOpen && modal.peek().modal === Modals.DatePicker
}

export function setIsOpen(
  isOpen: boolean,
  modal: Modals,
  params?: ToDoItemParams,
) {
  setModal({ isOpen, modal, params })
}

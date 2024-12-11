// Types
import { Item } from 'types/item'
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

export function getParams() {
  return modal.value.params
}

export function getItem() {
  return modal.value.params?.item
}

export function isDatePickerOpen() {
  return modal.value.isOpen && modal.peek().modal === Modals.DatePicker
}

export function setIsOpen(
  isOpen: boolean,
  modal: Modals,
  params?: { item?: Item },
) {
  setModal({ isOpen, modal, params })
}

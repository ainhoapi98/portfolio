export enum Modals {
  ToDoItem = 'toDoItem',
  DatePicker = 'datePicker',
}

export interface Modal {
  isOpen: boolean
  modal: Modals
  params?: unknown
}

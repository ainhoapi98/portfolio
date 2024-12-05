export enum Modals {
  ToDoItem = 'toDoItem',
  DatePicker = 'datePicker',
}

export interface Modal {
  isOpen: boolean
  modal: Modals
  params?: ToDoItemParams
}

export interface ToDoItemParams {
  id: string
  name: string
  date: string
}

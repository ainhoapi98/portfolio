import { createSignal } from 'utils/signals'
import { Item } from 'types/item'
import { mockedItems } from 'reducers/items/mockData'

const [items, setItems] = createSignal<Array<Item>>(mockedItems)

export function getItems() {
  return items
}

export function addItem(item: Item) {
  setItems([...items.peek(), item])
}

export function removeItem(id: string) {
  const newItems = items.peek().filter(item => item.id !== id)

  setItems(newItems)
}

export function getItemById(id: string) {
  return items.peek().find(item => item.id === id)
}

export function editItem(editedItem: Item) {
  const updatedItems = items.peek().map(item => {
    if (item.id === editedItem.id) {
      return editedItem
    } else return item
  })
  setItems(updatedItems)
}

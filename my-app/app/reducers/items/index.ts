import { createSignal } from 'utils/signals'
import { Item } from 'types/item'

const [items, setItems] = createSignal<Array<Item>>([])

export function getItems() {
  return items
}

export function addItem(item: Item) {
  console.log('addItem', item)
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

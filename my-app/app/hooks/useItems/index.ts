import { useSignals } from '@preact/signals-react/runtime'

// Reducers
import {
  addItem,
  editItem,
  getItemById,
  getItems,
  removeItem,
} from 'reducers/items'

function useItems() {
  useSignals()
  const items = getItems()

  return {
    items,
    addItem,
    removeItem,
    editItem,
    getItems,
    getItemById,
  }
}

export default useItems

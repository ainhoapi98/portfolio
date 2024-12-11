import { useSignals } from '@preact/signals-react/runtime' // Reducers
import {
  addItem,
  editItem,
  getItemById,
  getItems,
  removeItem,
} from 'reducers/items'
import { useCallback, useState } from 'react'

export enum Filter {
  All = 'All',
  Completed = 'Completed',
  Pending = 'Pending',
}

function useItems() {
  useSignals()
  const [filter, setFilter] = useState<string>(Filter.All)
  const items = getItems()

  const getFilteredItems = useCallback(() => {
    return items.value.filter(item => {
      switch (filter) {
        case Filter.All:
          return true
        case Filter.Completed:
          return item.isCompleted
        case Filter.Pending:
          return !item.isCompleted
        default:
          return false
      }
    })
  }, [filter])

  const handleFilterChange = (value: Filter) => {
    setFilter(value)
  }

  const getFilter = () => filter

  return {
    items,
    getFilteredItems,
    getFilter,
    handleFilterChange,
    addItem,
    removeItem,
    editItem,
    getItems,
    getItemById,
  }
}

export default useItems

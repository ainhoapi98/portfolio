import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons' // Styles
import { Content, Header, Wrapper } from './styled' // Components
import Dropdown from 'components/Dropdown'
import Item from './Item'
import Button from 'components/Button' // Reducers
import { setIsOpen } from 'reducers/modals'
import { setIsOpen as setPopoverOpen } from 'reducers/popovers' // Types
import { Modals } from 'types/modals'
import useItems, { Filter } from 'hooks/useItems'
import { PopoverType } from 'types/popovers'
import { Option } from 'types'

const options: Array<Option> = [
  { value: Filter.All, label: 'All' },
  { value: Filter.Pending, label: 'Pending' },
  { value: Filter.Completed, label: 'Completed' },
]

const ToDoList = () => {
  const {
    editItem,
    getItemById,
    handleFilterChange,
    getFilteredItems,
    getFilter,
  } = useItems()

  const items = getFilteredItems()

  const handleAdd = () => {
    setIsOpen(true, Modals.ToDoItem)
  }

  const handleChange = value => {
    console.log(value)
    handleFilterChange(value)
  }

  const handleEditItem = (itemId: string) => {
    setIsOpen(true, Modals.ToDoItem, { item: getItemById(itemId) })
  }
  const handleDeleteItem = (itemId: string) => {
    setPopoverOpen(true, PopoverType.Alert, { itemId })
  }

  const handleComplete = (itemId: string, isCompleted: boolean) => {
    const item = getItemById(itemId)
    if (item) {
      editItem({ ...item, isCompleted })
    }
  }

  return (
    <Wrapper>
      <Header>
        <Button onClick={handleAdd}>
          Add Task <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Dropdown
          options={options}
          value={getFilter()}
          label={'Select'}
          onChange={handleChange}
        />
      </Header>
      <Content>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            handleEdit={handleEditItem}
            handleDelete={handleDeleteItem}
            handleComplete={handleComplete}
          />
        ))}
      </Content>
    </Wrapper>
  )
}

export default ToDoList

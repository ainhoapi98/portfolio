import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// Styles
import { Content, Header, Wrapper } from './styled'

// Components
import Dropdown from 'components/Dropdown'
import Item from './Item'
import Button from 'components/Button'

// Reducers
import { setIsOpen } from 'reducers/modals'

// Types
import { Modals } from 'types/modals'
import { Option } from 'types'
import { Item as ItemI } from 'types/item'

const options: Array<Option> = [
  { value: 'All', label: 'All' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Completed', label: 'Completed' },
]

interface Props {
  items: Array<ItemI>
}

const ToDoList = ({ items }: Props) => {
  const handleAdd = () => {
    setIsOpen(true, Modals.ToDoItem)
  }

  const handleChange = () => {}

  const handleEditItem = (itemId: string) => {
    console.info(itemId, 'edit')
  }
  const handleDeleteItem = (itemId: string) => {
    console.info(itemId, 'delete')
  }
  return (
    <Wrapper>
      <Header>
        <Button onClick={handleAdd}>
          Add Task <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Dropdown
          options={options}
          value={null}
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
          />
        ))}
      </Content>
    </Wrapper>
  )
}

export default ToDoList

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { Content, Header, Wrapper } from './styled'
import Button from 'components/Button'
import { Item as ItemI } from 'types/item'
import Item from './Item'
import { Option } from 'types'
import Dropdown from 'components/Dropdown'

const options: Array<Option> = [
  { value: '1', label: 'item 1' },
  { value: '2', label: 'item 2' },
  { value: '3', label: 'item 3' },
]

interface Props {
  items: Array<ItemI>
}

const ToDoList = ({ items }: Props) => {
  const handleAdd = () => {
    console.info('task added')
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

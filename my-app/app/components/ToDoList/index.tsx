import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { Content, Header, Wrapper } from './styled'
import Button from 'components/Button'
import Dropdown, { Option } from '../Dropdown'
import { Item as ItemI } from 'types/Item'
import Item from './Item'

const options: Array<Option> = [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  { id: '3', label: 'Item 3' },
]

interface Props {
  items: Array<ItemI>
}

const ToDoList = ({ items }: Props) => {
  const handleAdd = () => {
    console.info('task added')
  }

  const handleChange = () => {}

  const handleEditItem = (itemId: string) => {}
  const handleDeleteItem = (itemId: string) => {}
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

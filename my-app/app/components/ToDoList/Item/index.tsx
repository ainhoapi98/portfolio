import { Item as ItemI } from 'types/item'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Container, Date, Information, Label, Options, Wrapper } from './styled'
import Checkbox from 'components/Checkbox'
import IconButton from 'components/IconButton'

interface Props {
  item: ItemI
  handleEdit: (itemId: string) => void
  handleDelete: (itemId: string) => void
  handleComplete: (itemId: string, isCompleted: boolean) => void
}

const Item = ({ item, handleEdit, handleComplete, handleDelete }: Props) => {
  const onClickEdit = (itemId: string) => () => {
    handleEdit(itemId)
  }

  const onClickDelete = (itemId: string) => () => {
    handleDelete(itemId)
  }

  const onComplete = (completed: boolean) => {
    handleComplete(item.id, completed)
  }

  return (
    <Wrapper>
      <Container>
        <Checkbox checked={item.isCompleted} onChange={onComplete} />
        <Information>
          <Label $isCompleted={item.isCompleted}>{item.name}</Label>
          <Date>{item.date}</Date>
        </Information>
      </Container>
      <Options>
        <IconButton
          onClick={onClickEdit(item.id)}
          icon={faPen}
          size={30}
          data-testid={'edit-item'}
        />
        <IconButton
          onClick={onClickDelete(item.id)}
          icon={faTrash}
          size={30}
          data-testid={'delete-item'}
        />
      </Options>
    </Wrapper>
  )
}

export default Item

import { faClose } from '@fortawesome/free-solid-svg-icons'

// Components
import Button from 'components/Button'
import { Container, Description, Header, IconWrapper, Title } from './styled'
import IconButton from 'components/IconButton'

// Types
// Reducers
import { getParams } from 'reducers/popovers'

// Hooks
import useItems from 'hooks/useItems'

const AlertContent = ({ handleClose }: { handleClose: () => void }) => {
  const params = getParams()
  const { removeItem } = useItems()

  const handleDelete = () => {
    if (params?.itemId) {
      removeItem(params.itemId)
    }
    handleClose()
  }

  return (
    <Container>
      <Header>
        <Title>Delete task?</Title>
        <IconWrapper>
          <IconButton
            size={30}
            onClick={handleClose}
            icon={faClose}
            transparent={true}
          />
        </IconWrapper>
      </Header>
      <Description>
        Are you sure about this? Once deleted, you will not be able to recover
        it.
      </Description>
      <Button onClick={handleDelete}>Confirm delete</Button>
    </Container>
  )
}

export default AlertContent

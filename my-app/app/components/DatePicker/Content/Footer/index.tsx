import { Container, DoneButton, FooterWrapper } from './styled'
import SaveButton from 'components/Button'

interface Props {
  handleDone: () => void
  handleSave: () => void
  isDisabled?: boolean
}

const Footer = ({ handleDone, handleSave, isDisabled }: Props) => {
  return (
    <FooterWrapper>
      <Container>
        <div>
          <SaveButton onClick={handleSave} disabled={isDisabled || false}>
            <span>Save</span>
          </SaveButton>
          <DoneButton onClick={handleDone} disabled={isDisabled!}>
            Done
          </DoneButton>
        </div>
      </Container>
    </FooterWrapper>
  )
}

export default Footer

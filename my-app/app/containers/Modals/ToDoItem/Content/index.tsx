import { ReferenceType } from '@floating-ui/react'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react' // Components
import Button from 'components/Button'
import TextInput from 'components/TextInput' // Reducers
import { setIsOpen } from 'reducers/popovers' // Types
import { PopoverType } from 'types/popovers' // Hooks
import usePopoversContext from 'hooks/usePopoversContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, Footer, Label, SelectDate, Title, Wrapper } from './styled'

interface Props {
  handleClose: () => void
}

const ToDoItemContent = ({ handleClose }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { refs } = usePopoversContext()
  const [name, setName] = useState<string>('')
  const [date, setDate] = useState<string | null>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setName(e.target.value)
  }

  const handleSave = () => {
    console.log('save')
    handleClose()
  }

  const handleSetDate = (date: string) => {
    setDate(date)
  }

  const handleOpen: MouseEventHandler<HTMLButtonElement> = e => {
    refs.setReference(e.target as ReferenceType)
    setIsOpen(true, PopoverType.Calendar, { handleChange: handleSetDate })
  }

  return (
    <Container>
      <Title>Create a new item</Title>
      <Wrapper>
        <Label>Name</Label>
        <TextInput
          ref={inputRef}
          id={'item-name'}
          placeholder={'New Item'}
          value={name}
          onChange={handleChange}
        />
      </Wrapper>
      <Wrapper>
        <Label>Date</Label>
        <SelectDate onClick={handleOpen} $variant={'secondary'}>
          {date ? (
            <span>{date}</span>
          ) : (
            <>
              <span>Select date</span>
              <FontAwesomeIcon icon={faCalendar} />
            </>
          )}
        </SelectDate>
      </Wrapper>
      <Footer>
        <Button onClick={handleClose} $variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={name === '' || date === null}>
          Save
        </Button>
      </Footer>
    </Container>
  )
}

export default ToDoItemContent

import { ReferenceType } from '@floating-ui/react'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 } from 'uuid'
import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react'

// Components
import Button from 'components/Button'
import TextInput from 'components/TextInput'

// Reducers
import { getParams } from 'reducers/modals'
import { setIsOpen } from 'reducers/popovers'

// Types
import { PopoverType } from 'types/popovers'

// Hooks
import usePopoversContext from 'hooks/usePopoversContext'
import useItems from 'hooks/useItems'

import { Container, Footer, Label, SelectDate, Title, Wrapper } from './styled'

interface Props {
  handleClose: () => void
}

const ToDoItemContent = ({ handleClose }: Props) => {
  const { addItem } = useItems()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { refs } = usePopoversContext()
  const params = getParams()
  const [name, setName] = useState<string>(params?.name || '')
  const [date, setDate] = useState<string | null>(params?.date || null)

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setName(e.target.value)
  }

  const handleSave = () => {
    addItem({ id: v4(), name, date: date!, isCompleted: false })
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

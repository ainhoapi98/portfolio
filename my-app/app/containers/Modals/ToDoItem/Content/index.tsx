import { ReferenceType } from '@floating-ui/react'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 } from 'uuid'
import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react'

// Components
import Button from 'components/Button'
import TextInput from 'components/TextInput'

// Reducers
import { getItem } from 'reducers/modals'
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
  const { addItem, editItem } = useItems()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { refs } = usePopoversContext()
  const item = getItem()
  const isEdit = item !== undefined
  const [name, setName] = useState<string>(item?.name || '')
  const [date, setDate] = useState<string | null>(item?.date || null)

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setName(e.target.value)
  }

  const handleSave = () => {
    const id = item?.id || v4()

    if (isEdit) {
      editItem({
        id: item?.id,
        name,
        date: date!,
        isCompleted: item?.isCompleted,
      })
    } else {
      addItem({
        id,
        name,
        date: date!,
        isCompleted: false,
      })
    }
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
      <Title>{isEdit ? 'Edit current task' : 'Create a new task'}</Title>
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

import { useState } from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons'

// Components
import Button from 'components/Button'
import { Container, IconWrapper } from './styled'
import IconButton from 'components/IconButton'
import Calendar from 'components/Calendar/SingleSelect'

// Types
import { Selection } from 'types/dates'

// Reducers
import { getParams } from 'reducers/popovers'

const CalendarContent = ({ handleClose }: { handleClose: () => void }) => {
  const params = getParams()
  const [date, setDate] = useState<string | null>(null)
  const handleSelect = (selection: Selection) => {
    setDate(selection[0] as string)
  }

  const handleSave = () => {
    if (date && params && params.handleChange) {
      params.handleChange(date)
      handleClose()
    }
  }

  return (
    <Container>
      <IconWrapper>
        <IconButton
          size={30}
          onClick={handleClose}
          icon={faClose}
          transparent={true}
        />
      </IconWrapper>
      <Calendar
        numberCalendars={1}
        initValue={[null]}
        onSelectUpdate={handleSelect}
      />
      <Button onClick={handleSave} disabled={date === null}>
        Done
      </Button>
    </Container>
  )
}

export default CalendarContent

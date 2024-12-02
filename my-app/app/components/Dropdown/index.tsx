import { Container, Header, List, ListItem } from './styled'
import { MutableRefObject, ReactNode, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useOutsideClick } from 'hooks'

export interface Option {
  id: string
  label: string
  renderLabel?: (id: string) => ReactNode
}

interface Props {
  options: Array<Option>
  value: string | null
  label: string
  onChange: (id: string | null) => void
}

const Dropdown = ({ options, value, label }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(value)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (id: string) => () => {
    setSelected(id)
  }

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  const ref = useOutsideClick(
    handleClickOutside,
  ) as MutableRefObject<HTMLDivElement | null>

  return (
    <Container ref={ref}>
      <Header onClick={handleOpen}>
        <span>{selected || label}</span>
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </Header>
      {isOpen && (
        <List>
          {options.map(option => (
            <ListItem
              onClick={handleSelect(option.id)}
              $isSelected={option.id === selected}
            >
              {option.renderLabel ? (
                option.renderLabel(option.id)
              ) : (
                <span>{option.label}</span>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  )
}

export default Dropdown

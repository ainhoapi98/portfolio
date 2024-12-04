import { Container, Header, List, ListItem } from './styled'
import { MutableRefObject, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { useOutsideClick } from 'hooks'
import { Option } from 'types'

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

  const handleSelect = (optionValue: string) => () => {
    setSelected(optionValue)
    setIsOpen(false)
  }

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  const ref = useOutsideClick(
    handleClickOutside,
  ) as MutableRefObject<HTMLDivElement | null>

  const getLabel = () => {
    return options.find(option => option.value === value)?.value || label
  }

  return (
    <Container ref={ref}>
      <Header onClick={handleOpen} isOpen={isOpen}>
        <span>{getLabel()}</span>
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </Header>
      {isOpen && (
        <List>
          {options.map(option => (
            <ListItem
              onClick={handleSelect(option.value)}
              $isSelected={option.value === selected}
            >
              {option.renderLabel ? (
                option.renderLabel(option.value)
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

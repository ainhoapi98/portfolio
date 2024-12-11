import { Wrapper } from './styled'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

interface Props {
  label?: string
  checked: boolean
  onChange: (completed: boolean) => void
}

const Checkbox = ({ label, checked, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleClick = () => {
    setIsChecked(!isChecked)
    onChange(!isChecked)
  }

  return (
    <Wrapper
      onClick={handleClick}
      $isChecked={isChecked}
      data-testid="checkbox"
    >
      <FontAwesomeIcon icon={isChecked ? faCheckSquare : faSquare} />
      {label}
    </Wrapper>
  )
}

export default Checkbox

import { ReactElement } from 'react'
import { Circle, ToggleWrapper, Wrapper } from 'components/Toggle/styled'

export interface Props {
  isChecked: boolean
  isDisabled?: boolean
  onToggle: () => void
  label?: ReactElement
}

const Toggle = ({ isChecked, isDisabled, onToggle, label }: Props) => (
  <Wrapper $isDisabled={isDisabled}>
    {label && label}
    <ToggleWrapper onClick={onToggle} $isChecked={isChecked}>
      <Circle />
    </ToggleWrapper>
  </Wrapper>
)

export default Toggle

import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { MouseEventHandler } from 'react'

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon: IconProp
  size?: number
  disabled?: boolean
}

const IconButton = ({ onClick, size, icon, disabled, ...rest }: Props) => {
  return (
    <Wrapper onClick={onClick} size={size} disabled={disabled} {...rest}>
      <FontAwesomeIcon icon={icon} />
    </Wrapper>
  )
}

export default IconButton

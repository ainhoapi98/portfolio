import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { MouseEventHandler } from 'react'

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon: IconProp
  transparent?: boolean
  size?: number
  disabled?: boolean
}

const IconButton = ({
  onClick,
  size,
  icon,
  disabled,
  transparent,
  ...rest
}: Props) => {
  return (
    <Wrapper
      onClick={onClick}
      size={size}
      disabled={disabled}
      transparent={transparent}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} />
    </Wrapper>
  )
}

export default IconButton

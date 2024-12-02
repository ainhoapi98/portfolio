import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  onClick: () => void
  icon: IconProp
  size?: number
}

const IconButton = ({ onClick, size, icon, ...rest }: Props) => {
  return (
    <Wrapper onClick={onClick} size={size} {...rest}>
      <FontAwesomeIcon icon={icon} />
    </Wrapper>
  )
}

export default IconButton

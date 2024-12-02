import { Wrapper } from './styled'
import { PropsWithChildren } from 'react'

interface Props {
  onClick: () => void
}

const Button = ({ onClick, children }: PropsWithChildren<Props>) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>
}

export default Button

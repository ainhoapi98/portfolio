import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

import { Container, Label, Wrapper } from './styled'

export interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
  id: string
  label?: ReactNode // Optional label for the input
}

const TextInput = forwardRef(function TextInput(
  { id, label, className, ...inputProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <Container className={className}>
      {!!label && (
        <Label data-testid={'label'} htmlFor={id}>
          {label}
        </Label>
      )}
      <Wrapper data-testid={'input'}>
        <input id={id} {...inputProps} ref={ref} />
      </Wrapper>
    </Container>
  )
})

export default TextInput

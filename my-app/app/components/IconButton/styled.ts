import styled from 'styled-components'
import { Colors } from 'styles'

export const Wrapper = styled.button<{ size?: number }>`
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  height: ${({ size }) => (size ? size : 20)}px;
  width: ${({ size }) => (size ? size : 20)}px;
  align-content: center;
  justify-content: center;
  color: ${Colors.text.inverted};
  background-color: ${Colors.background.secondary};
  border: none;

  &:hover {
    background-color: ${Colors.background.secondarySubtle};
  }

  & > svg {
    height: 100%;
  }
`

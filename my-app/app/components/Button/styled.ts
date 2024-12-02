import styled from 'styled-components'
import { Colors, overflowEllipsis } from 'styles'

export const Wrapper = styled.div`
  cursor: pointer;
  background-color: ${Colors.background.accent};
  border-radius: 5px;
  width: fit-content;
  padding: 0 16px;
  height: 32px;
  align-content: center;
  justify-content: center;
  color: ${Colors.text.inverted};
  ${overflowEllipsis};

  &:hover {
    background-color: ${Colors.background.accentSubtle};
  }
`

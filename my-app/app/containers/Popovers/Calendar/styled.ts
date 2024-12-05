import { rgba } from 'polished'
import styled from 'styled-components'
import { Colors } from 'styles'

export const Container = styled.div`
  background-color: ${Colors.background.inverted};
  box-shadow: 0 0 6px 0 ${rgba(Colors.black, 0.4)};
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
`

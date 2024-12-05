import styled from 'styled-components'
import { Colors } from 'styles'
import { rgba } from 'polished'

export const Container = styled.div`
  background: ${Colors.background.inverted};
  border: 1px solid ${Colors.border.default};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 0 10px 0 ${rgba(Colors.neutral.black, 0.4)};
`

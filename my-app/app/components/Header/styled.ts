import styled from 'styled-components'
import { Colors } from 'styles'

export const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background.primary};
`

export const Title = styled.span`
  font-size: 26px;
  font-weight: bold;
  color: ${Colors.text.inverted};
`

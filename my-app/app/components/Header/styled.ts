import styled from 'styled-components'
import { Colors } from 'styles'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background.primary};
  box-shadow: 0 0 10px 0 ${rgba(Colors.black, 0.6)};
`

export const Title = styled.span`
  font-size: 26px;
  font-weight: bold;
  color: ${Colors.text.inverted};
`

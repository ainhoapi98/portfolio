import styled from 'styled-components'
import { Colors } from 'styles'
import Button from 'components/Button'

export const Container = styled.div`
  background: ${Colors.background.inverted};
  padding: 16px;
  color: ${Colors.text.primary};
  display: flex;
  gap: 16px;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: bold;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 150px;
`

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;

  & > ${Button} {
    width: 50%;
  }
`
export const Label = styled.span`
  font-weight: bold;
  font-size: 13px;
`

export const SelectDate = styled(Button)`
  width: fit-content;
`

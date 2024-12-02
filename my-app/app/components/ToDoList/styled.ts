import styled from 'styled-components'
import { Colors } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.gray};
  border-radius: 6px;
  padding: 8px;
  gap: 8px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`

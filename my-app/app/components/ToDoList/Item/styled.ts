import styled from 'styled-components'
import { Colors } from 'styles'

export const Wrapper = styled.div`
  padding: 8px;
  background-color: ${Colors.background.inverted};
  border-radius: 4px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${Colors.text.primary};
`

export const Label = styled.span<{ $isCompleted: boolean }>`
  text-decoration: line-through;
`

export const Date = styled.span`
  font-size: 9px;
  font-style: italic;
`

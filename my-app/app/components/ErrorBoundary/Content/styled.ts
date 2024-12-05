import styled from 'styled-components'
import { Spacing } from 'styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${Spacing.size200};
  padding: ${Spacing.size200};
  height: 100%;
  width: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${Spacing.size100};
  align-self: stretch;
  font-weight: bold;
`

export const Content = styled.div``

export const Link = styled.a`
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  text-decoration-line: underline;
`

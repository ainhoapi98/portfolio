import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.size200};
  padding: ${({ theme: { spacing } }) => spacing.size200};
  height: 100%;
  width: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing.size100};
  align-self: stretch;
  font: ${({ theme: { font } }) => font.size175.semibold};
`

export const Content = styled.div`
  font: ${({ theme: { font } }) => font.size125.regular};
`

export const Link = styled.a`
  font: ${({ theme: { font } }) => font.size125.semibold};
  text-align: center;
  cursor: pointer;
  text-decoration-line: underline;
`

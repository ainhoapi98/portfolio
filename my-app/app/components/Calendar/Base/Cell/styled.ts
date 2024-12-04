import styled, { css } from 'styled-components'
import { Colors } from 'styles'

export const Cell = styled.td<{ $isInMonth?: boolean }>`
  text-align: center;
  color: ${Colors.text.primary};
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 13px;

  ${({ $isInMonth }) =>
    !$isInMonth &&
    css`
      pointer-events: none;
      color: ${Colors.gray};
    `};
`

export const WeekdayCell = styled(Cell)`
  color: ${Colors.text.primary};
`

export const Date = styled.span`
  line-height: 16px;
`

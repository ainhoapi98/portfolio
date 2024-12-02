import styled, { css } from 'styled-components'
import { Colors, overflowEllipsis } from 'styles'

export const Container = styled.div`
  width: 104px;
`

export const Header = styled.div`
  padding: 0 16px;
  cursor: pointer;
  height: 32px;
  color: ${Colors.text.inverted};
  background-color: ${Colors.background.accent};
  font-weight: bold;
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;
  border-radius: 5px;
`

export const List = styled.ul`
  border: 1px solid ${Colors.gray};
  list-style-type: none;
  padding: 16px 4px;
  border-radius: 5px;
  background-color: ${Colors.background.inverted};
  color: ${Colors.text.primary};
  margin-top: 0;
`

export const ListItem = styled.li<{ $isSelected: boolean }>`
  cursor: pointer;
  padding: 4px 8px;
  ${overflowEllipsis};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      font-weight: bold;
    `}
  &:hover {
    color: ${Colors.text.accent};
    font-weight: bold;
  }
`

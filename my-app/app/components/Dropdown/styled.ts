import styled, { css } from 'styled-components'
import { Colors, overflowEllipsis } from 'styles'

export const Container = styled.div`
  position: relative;
`

export const Header = styled.div<{ isOpen: boolean }>`
  padding: 0 20px;
  cursor: pointer;
  height: 32px;
  color: ${Colors.text.inverted};
  background-color: ${Colors.background.secondary};
  font-weight: bold;
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;
  border-radius: 5px;
  font-size: 13px;

  &:hover {
    background-color: ${Colors.background.secondaryAccent};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${Colors.background.secondaryAccent};
    `}
`

export const List = styled.ul`
  border: 1px solid ${Colors.gray};
  position: absolute;
  top: 36px;
  z-index: 10;
  list-style-type: none;
  padding: 4px;
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

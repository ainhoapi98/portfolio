import styled, { css } from 'styled-components'
import { Colors, Spacing } from 'styles'
import { rgba } from 'polished'

type Variant = 'primary' | 'secondary'

export interface Props {
  $variant?: Variant
}

const variants = {
  primary: css`
    background-color: ${Colors.background.primary};
    color: ${Colors.text.inverted};
    border: 2px solid transparent;

    &:hover {
      background-color: ${Colors.background.primaryAccent};
    }

    &:focus {
      color: ${Colors.text.focus} !important;
      border: 2px solid ${Colors.border.focus};
      background-color: ${Colors.background.primarySubtle};
    }

    &:active {
      background-color: ${Colors.background.primaryAccent};
      border: 2px solid ${Colors.border.focus};
      font-weight: bold;
      color: ${Colors.text.inverted};

      & > svg {
        color: ${Colors.text.inverted};
      }
    }
  `,
  secondary: css`
    background-color: ${Colors.background.secondary};
    color: ${Colors.text.inverted};
    width: 144px;
    border: 2px solid transparent;

    &:hover {
      background-color: ${Colors.background.secondaryAccent};
    }

    &:active {
      background-color: ${Colors.background.secondaryAccent};
      box-shadow: 0 2px 4px 0 ${rgba(Colors.neutral.black, 0.12)} inset;
      border: none;
    }

    &:focus {
      border: 2px solid ${Colors.border.active};
      background-color: ${Colors.background.secondarySubtle};
    }
  `,
}

const Button = styled.button<Props>`
  gap: ${Spacing.size100};
  flex-shrink: 0;
  display: flex;
  border-radius: 4px;
  border: none;
  height: 32px;
  padding: 0 ${Spacing.size200};
  outline: medium none;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  ${({ $variant }) => ($variant ? variants[$variant] : variants['primary'])};

  &:disabled {
    border: 1px solid ${Colors.border.subtle};
    background-color: ${Colors.neutral.gray};
    color: ${Colors.text.tertiary};
    cursor: default;
    pointer-events: none;
  }
`

export default Button

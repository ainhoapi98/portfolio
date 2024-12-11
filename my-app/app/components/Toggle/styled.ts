import styled, { css } from 'styled-components'
import { Colors, Spacing } from 'styles'

export const Wrapper = styled.div<{ $isDisabled?: boolean }>`
  display: flex;
  height: 16px;
  align-items: center;
  gap: ${Spacing.size50};
  color: ${Colors.text.primary};
  font-weight: bold;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      pointer-events: none;
      color: ${Colors.text.subtle};

      ${ToggleWrapper} {
        background-color: ${Colors.background.primarySubtle};
        pointer-events: none;
      }
    `}
`

export const Circle = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${Colors.background.inverted};
  transition: background-color 0.2s;
  flex-shrink: 0;
  position: relative;
`

export const ToggleWrapper = styled.div<{
  $isChecked: boolean
}>`
  display: flex;
  width: 32px;
  height: 16px;
  padding: ${Spacing.size25};
  gap: ${Spacing.size50};
  border-radius: 8px;
  background-color: ${Colors.background.primary};
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  flex-direction: column;
  transition: background-color 0.2s;

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      background-color: ${Colors.background.primaryAccent};
      justify-content: flex-end;
      align-items: flex-end;

      ${Circle} {
        background-color: ${Colors.background.inverted};
      }
    `}
`

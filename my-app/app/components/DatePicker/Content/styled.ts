import styled, { css } from 'styled-components'
import { Colors, Spacing } from 'styles'
import { rgba } from 'polished'

const Tab = styled.div<{ $isSelected?: boolean; $isDisabled?: boolean }>`
  cursor: pointer;
  border-radius: 0;
  display: flex;
  height: auto;
  width: auto;
  flex: 1;
  outline: none;
  padding: 8px;
  justify-content: center;
  color: ${Colors.text.primary};

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          font-weight: bold;
          background-color: ${Colors.background.inverted};
        `
      : css`
          font-weight: normal;
          background-color: ${Colors.background.primary};
        `}
`

export const QuickSelectTab = styled(Tab)<{ $isSelected: boolean }>`
  ${({ $isSelected }) =>
    !$isSelected &&
    css`
      border-radius: 0 0 0 6px;
    `}
`

export const CustomRangeTab = styled(Tab)<{
  $isSelected: boolean
  $isDisabled?: boolean
}>`
  ${({ $isSelected }) =>
    !$isSelected &&
    css`
      border-radius: 0 0 6px 0;
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: default;
      pointer-events: none;
      color: ${Colors.text.subtle};
    `}
`

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Wrapper = styled.div`
  height: fit-content;
  border: 1px solid ${Colors.border.default};
  box-shadow: 0 0 6px 0 ${rgba(Colors.black, 0.1)};
  max-width: fit-content;
  overflow: hidden;
  border-radius: 5px;
  text-align: left;
`

export const RangeSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${Spacing.size200};
  gap: ${Spacing.size200};
`

export const Line = styled.div`
  border-top: 1px solid ${Colors.border.default};
  width: 100%;
`

export const LineWrapper = styled.div`
  padding: 0 ${Spacing.size200};
`

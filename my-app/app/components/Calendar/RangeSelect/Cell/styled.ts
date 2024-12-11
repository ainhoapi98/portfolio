import styled, { css } from 'styled-components'

// Styles
import {
  SingleSelectCell,
  SingleSelectProps,
} from 'components/Calendar/SingleSelect/Cell/styled'

// Types
import { Position } from 'types/dates'
import { Colors, Spacing } from 'styles'

export interface RangeSelectProps extends SingleSelectProps {
  $position?: Position
  $isInMonth?: boolean
}

export const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${Spacing.size50};
  flex-shrink: 0;
  height: 100%;
`

export const RangeSelectCell = styled(SingleSelectCell)<RangeSelectProps>`
  ${({ $position, $isInMonth }) => {
    switch ($position) {
      case Position.SelectionStart:
        return (
          $isInMonth &&
          css`
            border-radius: 4px 0 0 4px;
            border: 1px solid ${Colors.border.focus};
            background-color: ${Colors.background.primarySubtle};
          `
        )
      case Position.SelectionEnd:
        return (
          $isInMonth &&
          css`
            border: 1px solid ${Colors.border.focus};
            border-radius: 0 4px 4px 0;
            background-color: ${Colors.background.primarySubtle};
          `
        )
      case Position.SelectionBetween:
        return (
          $isInMonth &&
          css`
            border: 1px solid ${Colors.border.focus};
            background-color: ${Colors.background.primarySubtle};
          `
        )
    }
  }}
`

import styled from 'styled-components'
import { Colors, Spacing } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Spacing.size200};
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${Spacing.size100};
  flex: 1 0 0;
  align-self: stretch;
`

export const RangeDisplay = styled.div`
  display: flex;
  width: 192px;
  height: 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;

  ${DateContainer} {
    font-weight: bold;
  }

  background-color: ${Colors.background.primarySubtle};
  border: 1px solid ${Colors.border.default};

  &:hover {
    background-color: ${Colors.background.secondarySubtle};
  }

  &:focus {
    &::before {
      content: ' ';
      position: absolute;
      z-index: -1;
      border-radius: 4px;
      background-color: ${Colors.border.active};
      height: 36px;
      width: 196px;
    }
  }
`

export const Label = styled.span`
  line-height: 16px;
`

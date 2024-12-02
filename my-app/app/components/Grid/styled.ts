import styled from 'styled-components'
import { Colors, Spacing } from 'styles'
import GridLayout from 'react-grid-layout'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  overflow: auto;
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  padding: 0 20px;
`

export const WidgetWrapper = styled.div`
  background: ${Colors.background.inverted};
  border-radius: 32px;
  padding: ${Spacing.size400};
  min-width: 340px;
  flex-grow: 1;
  max-width: 440px;
  position: relative;
  box-shadow: 10px 10px 4px 0 ${rgba(Colors.background.secondary, 0.8)};
`

export const DragHandle = styled.div`
  justify-self: start;
  display: flex;
  color: ${Colors.gray};
  position: relative;
  top: -10px;
  right: 10px;
  cursor: grab;

  & > svg {
    width: 25px;
    height: 25px;
  }
`

export const Layout = styled(GridLayout)<{ minHeight: number }>`
  min-height: ${({ minHeight }) => minHeight}px;
  z-index: 1;
  padding-top: ${Spacing.size200};

  .react-grid-item.react-grid-placeholder {
    background-color: ${Colors.background.secondary};
    border-radius: 32px;
  }
`

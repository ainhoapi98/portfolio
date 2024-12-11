import styled from 'styled-components'
import { Colors, Spacing } from 'styles'

export const Wrapper = styled.div`
  max-height: 400px;
  min-height: 112px;
  width: 528px;
  overflow-y: auto;
  display: flex;
  padding: ${Spacing.size200} ${Spacing.size400};
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: ${Spacing.size200};
  align-self: stretch;
`

export const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${Spacing.size200};
  margin-bottom: auto;
  align-items: center;
  align-content: center;
`

export const NoOptionsLabel = styled.span`
  color: ${Colors.text.primary};
  text-align: center;
`

import styled from 'styled-components'
import { overflowEllipsis, Spacing } from 'styles' // Components
import Button from 'components/Button'

export const ContentButton = styled(Button)`
  width: fit-content;
  height: 32px;
`

export const Label = styled.span`
  user-select: none;
  font-size: 1.15rem;
  ${overflowEllipsis()};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${Spacing.size100};
`

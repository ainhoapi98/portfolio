import styled, { css } from 'styled-components'
import Button from 'components/Button'
import { Spacing } from 'styles'

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.size200};
  padding: ${Spacing.size200};
`
export const DoneButton = styled(Button)`
  align-self: flex-end;
`

export const Container = styled.div<{ $singleItem?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-self: stretch;

  ${({ $singleItem }) =>
    !$singleItem &&
    css`
      justify-content: space-between;

      :nth-child(2) {
        display: flex;
        gap: ${Spacing.size100};
      }
    `}
`

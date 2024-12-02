import styled from 'styled-components'
import { Colors } from 'styles'

export const Wrapper = styled.div<{ $isChecked: boolean }>`
  display: flex;
  color: ${({ $isChecked }) =>
    $isChecked ? Colors.background.accent : Colors.gray};
`

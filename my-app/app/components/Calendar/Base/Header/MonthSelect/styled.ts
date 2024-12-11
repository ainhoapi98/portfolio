import styled from 'styled-components'
import { Colors, Spacing } from 'styles'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${Colors.text.primary}
    padding: 0 ${Spacing.size200};
    gap: ${Spacing.size50};
`

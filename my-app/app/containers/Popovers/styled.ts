import styled from 'styled-components'
import { FloatingOverlay } from '@floating-ui/react'

export const Overlay = styled(FloatingOverlay)`
  display: grid;
  place-items: center;
  z-index: 21;
`

export const Wrapper = styled.div`
  z-index: 9999;
`

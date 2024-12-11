import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  min-width: 118px;
  width: fit-content;
  margin-bottom: -2px;
`

export const PopoverWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  justify-content: center;
  align-items: center;
`

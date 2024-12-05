import styled from 'styled-components'

export const HeaderContainer = styled.div`
  margin-bottom: 10px;
`

export const LabelMonth = styled.span`
  height: 32px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const NavigationContainer = styled.div<{ $positionEnd: boolean }>`
  display: flex;
  gap: 8px;
  //width: 240px;
  align-items: center;
  justify-content: ${({ $positionEnd }) =>
    $positionEnd ? 'end' : 'space-between'};
`

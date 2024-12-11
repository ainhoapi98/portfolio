import styled from 'styled-components'
import { Colors } from 'styles'

export const Container = styled.div`
  overflow: hidden;
  position: relative;
`

export const Label = styled.label`
  display: block;
  color: ${Colors.text.primary};
  font-size: 13px;
  font-weight: 600;
  pointer-events: none;
  transition: all 125ms;
  transform-origin: 0 50% 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 28px;
`

export const Wrapper = styled.div`
  display: flex;

  input:focus {
    outline: none;
    border-bottom: 1px solid ${Colors.border.active};
  }

  input {
    border-bottom: 1px solid ${Colors.border.default};
    color: ${Colors.text.primary};
    border-left: none;
    border-right: none;
    border-top: none;
    max-width: 100%;
    width: 100%;
    padding: 6px 0;
    background-color: transparent;
  }
`

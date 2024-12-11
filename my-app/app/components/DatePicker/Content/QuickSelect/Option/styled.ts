import styled, { css } from 'styled-components'

// Components
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import IconButton from 'components/IconButton'
import { Colors, overflowEllipsis, Spacing } from 'styles'

export const ActionWrapper = styled.div`
  align-items: center;
  flex-shrink: 0;
  display: flex;
  opacity: 0;
  width: 0;
  transition:
    width 0.5s ease,
    opacity 0.5s ease;
`

export const OptionButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
`

export const OptionLabel = styled.span`
  ${overflowEllipsis()};
  width: 100%;
`

export const Option = styled(Button)<{
  $isSelected: boolean
  $isDisabled?: boolean
}>`
  ${overflowEllipsis()};
  transition: justify-content 0.5s ease;

  &:hover {
    text-align: left;
    justify-content: space-between;

    ${OptionButton} {
      background-color: ${Colors.background.secondarySubtle};
    }

    ${ActionWrapper} {
      width: 32px;
      opacity: 1;
    }
  }

  &:focus {
    border: 2px solid ${Colors.border.active};
    color: ${Colors.text.primary};
    background-color: ${Colors.background.primarySubtle};

    ${OptionButton} {
      background-color: ${Colors.background.primarySubtle};
    }

    &:after {
      display: none;
    }
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border: 2px solid ${Colors.border.active};
      color: ${Colors.text.accent};
    `}
`

export const EditInput = styled(TextInput)<{ maxWidth: number }>`
  display: flex;
  padding: ${Spacing.size50};
  justify-content: center;
  align-items: center;
  gap: ${Spacing.size100};
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${Colors.border.active};
  background-color: ${Colors.background.primarySubtle};
  min-width: 8px !important;
  max-width: ${({ maxWidth }) => `calc(${maxWidth}px - 2*${Spacing.size200})`};

  input {
    border-bottom: unset;
    padding: 0;
  }

  input:focus {
    border-bottom: unset;
    color: ${Colors.text.primary} !important;
  }
`

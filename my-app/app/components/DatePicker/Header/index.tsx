import { useContext } from 'react'
// Styles
import { ContentButton, Label, Wrapper } from './styled'
// Context
import { Context } from 'components/DatePicker/Context'

// Components
import NavigateButton from 'components/IconButton'
import {
  faCaretDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface Props {
  disabled?: boolean
  handleClick: () => void
  handleClickPrev: () => void
  handleClickNext: () => void
}

/**
 * Date Picker header. Contains a button to navigate backwards in time, one to open the date picker component,
 * and one to navigate forwards in time
 *
 * @param disabled            Button is disabled
 * @param handleClick         Handler for opening the date picker
 * @param handleClickNext     Handler for navigating backwards in time
 * @param handleClickPrev     Handler for navigating forward in time
 * @param rest
 *
 */
const Header = ({
  disabled,
  handleClick,
  handleClickNext,
  handleClickPrev,
  ...rest
}: Props) => {
  const { value } = useContext(Context)

  return (
    <Wrapper>
      <NavigateButton
        onClick={handleClickPrev}
        disabled={disabled}
        icon={faChevronLeft}
      />

      <ContentButton
        onClick={handleClick}
        disabled={disabled}
        data-testid={'selected-head'}
        {...rest}
      >
        <Label>
          {value ? (
            <span>
              {value[0]} - {value[1]}
            </span>
          ) : (
            <span>Select Range</span>
          )}
        </Label>
        <FontAwesomeIcon icon={faCaretDown} />
      </ContentButton>
      <NavigateButton
        onClick={handleClickNext}
        disabled={disabled}
        icon={faChevronRight}
      />
    </Wrapper>
  )
}

export default Header

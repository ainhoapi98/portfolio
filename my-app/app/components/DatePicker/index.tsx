import { ReactNode, useState } from 'react' // Components
import DateSelectContextProvider from 'components/DatePicker/Context'
import Header from './Header'
import DatePickerContent from 'components/DatePicker/Content' // Types
import { QuickOption, RangeSelection, TabOptions } from 'types/dates' // Styles
import { Container, PopoverWrapper } from './styled'

export interface Props {
  value: RangeSelection
  setValue: (v: RangeSelection) => void
  maxDays: number
  numberCalendars: number
  startOfWeek: number
  minDate?: string
  maxDate?: string
  disabled?: boolean
  defaultTab?: TabOptions
  onChange: (v: RangeSelection) => void
  customLabel?: ReactNode
  isOpen?: boolean
}

export interface DatePickerContextInitProps {
  dateFormat?: string
  options: Array<QuickOption>
  handleOptionRename: (optionId: string, newName: string) => () => void
  handleOptionDelete: (optionId: string) => () => void
}

export type DatePickerProps = Props & DatePickerContextInitProps

const DatePicker = ({
  value,
  setValue,
  maxDays,
  numberCalendars,
  startOfWeek,
  minDate,
  maxDate,
  disabled,
  defaultTab = TabOptions.QuickSelect,
  onChange,
  dateFormat = 'YYYY-MM-DD',
  options,
  handleOptionRename,
  handleOptionDelete,
  ...rest
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClickPrev = () => null
  const handleClickNext = () => null

  return (
    <DateSelectContextProvider
      value={value}
      setValue={setValue}
      dateFormat={dateFormat}
      options={options}
      handleOptionRename={handleOptionRename}
      handleOptionDelete={handleOptionDelete}
      {...rest}
    >
      <Container data-testid={'date-select-container'}>
        <Header
          handleClick={handleClick}
          disabled={disabled}
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
        />
        {isOpen && (
          <PopoverWrapper>
            <DatePickerContent
              defaultTab={defaultTab!}
              maxDays={maxDays}
              numberCalendars={numberCalendars}
              startOfWeek={startOfWeek}
              minDate={minDate}
              maxDate={maxDate}
              onChange={onChange}
              handleClose={handleClick}
            />
          </PopoverWrapper>
        )}
      </Container>
    </DateSelectContextProvider>
  )
}

export default DatePicker

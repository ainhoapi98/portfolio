import { useContext, useState } from 'react'

// Types
import { TabOptions } from 'components/DatePicker/types'
import { RangeSelection } from 'components/Calendar/types'

// Context
import { Context } from 'components/DatePicker/Context'

// Styles
import {
  CustomRangeTab,
  Line,
  LineWrapper,
  QuickSelectTab,
  RangeSelectWrapper,
  TabContainer,
  Wrapper,
} from './styled'

// Components
import Footer from 'components/DatePicker/Content/Footer'
import RangeSelect from 'components/Calendar/RangeSelect'
import QuickSelect from 'components/DatePicker/Content/QuickSelect'
import SelectionDisplay from 'components/DatePicker/Content/SelectionDisplay'

// Utils
import { isRangeSet } from 'components/DatePicker/utils'
import { KeyCodes, useKeyPressHandler } from 'hooks'

export interface Props {
  defaultTab: TabOptions
  maxDays: number
  numberCalendars: number
  startOfWeek: number
  minDate?: string
  maxDate?: string
  onChange: (v: RangeSelection) => void
  handleClose: () => void
  handleSave?: (v: RangeSelection) => void
}

const DatePickerContent = ({
  defaultTab,
  maxDays,
  numberCalendars,
  startOfWeek,
  maxDate,
  minDate,
  onChange,
  handleClose,
  handleSave,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState<TabOptions>(defaultTab)
  const { value, changeValue } = useContext(Context)

  const handleClickTab = (newTab: TabOptions) => () => {
    setSelectedTab(newTab)
    changeValue([null, null])
  }

  function isValueValid(value: RangeSelection) {
    return isRangeSet(value)
  }

  const handleChangePrimaryRange = (range: RangeSelection) => {
    const newValue = range

    if (isValueValid(value)) {
      changeValue([range[0], null])
      return
    }

    changeValue(newValue)
  }

  const handleSaveRange = () => {
    if (value && isValueValid(value) && handleSave) {
      handleSave(value)
    }
  }

  const handleDone = () => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
    handleClose && handleClose()
    if (value && isValueValid(value) && onChange) {
      onChange(value)
    }
  }

  useKeyPressHandler({
    [KeyCodes.KEY_ESC]: () => {
      changeValue([null, null])
    },
  })

  return (
    <Wrapper data-testid={'date-select-popover'}>
      <TabContainer>
        <CustomRangeTab
          $isSelected={selectedTab === TabOptions.CustomRange}
          onClick={handleClickTab(TabOptions.CustomRange)}
        >
          <span>Custom Range</span>
        </CustomRangeTab>
        <QuickSelectTab
          $isSelected={selectedTab === TabOptions.QuickSelect}
          onClick={handleClickTab(TabOptions.QuickSelect)}
        >
          <span>Quick Select</span>
        </QuickSelectTab>
      </TabContainer>
      <>
        {selectedTab === TabOptions.CustomRange ? (
          <RangeSelectWrapper>
            <>
              <SelectionDisplay range={value} />
              <RangeSelect
                value={value}
                numberCalendars={numberCalendars}
                minDate={minDate}
                maxDate={maxDate}
                startOfWeek={startOfWeek}
                onSelectUpdate={handleChangePrimaryRange}
                maxDays={maxDays}
              />
            </>
          </RangeSelectWrapper>
        ) : (
          <QuickSelect />
        )}
        <LineWrapper>
          <Line />
        </LineWrapper>
        <Footer
          handleDone={handleDone}
          handleSave={handleSaveRange}
          isDisabled={!isValueValid(value)}
        />
      </>
    </Wrapper>
  )
}

DatePickerContent.displayName = 'DatePickerContent'

export default DatePickerContent

import { useContext, useState } from 'react' // Types
import { QuickOption } from 'types/dates' // Styles
import { NoOptionsLabel, OptionContainer, Wrapper } from './styled' // Context
import { Context } from 'components/DatePicker/Context'
import { getQuickValue } from 'components/DatePicker/utils'

import Option from './Option'

const QuickSelect = () => {
  const { options, changeValue, value } = useContext(Context)
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    getQuickValue(options, value),
  )

  const handleClick = (selected: QuickOption) => () => {
    setSelectedOption(selected.id)
    changeValue(selected.value)
  }

  return (
    <Wrapper data-testid={'quick-select-wrapper'}>
      {options?.length ? (
        <OptionContainer>
          {options.map((option, index) => (
            <Option
              key={`section1-${index}`}
              data-testid={'section1-option'}
              isSelected={option.id === selectedOption}
              handleClick={handleClick}
              option={option}
            />
          ))}
        </OptionContainer>
      ) : null}

      {!options?.length && (
        <NoOptionsLabel>No Quick Select options were provided</NoOptionsLabel>
      )}
    </Wrapper>
  )
}

export default QuickSelect

import { useCallback } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import range from 'lodash/range'

// Components
import Select from 'components/Dropdown'

// Styles
import { Container } from './styled'
import { Option } from 'types'

interface Props {
  value: Dayjs
  minDate?: Dayjs
  maxDate?: Dayjs
  onChange: (value: Dayjs) => void
}

/**
 * Component for selecting a month using two `<Select />` elements, one for
 * the month and one for the year.
 *
 * The range is determined by the `minDate` and `maxDate`, if present
 *
 * @param     props
 */
const MonthSelect = ({ onChange, ...restProps }: Props) => {
  const handleChange = useCallback(
    (value: Dayjs) => {
      onChange(value.startOf('month'))
    },
    [onChange],
  )

  return (
    <Container data-testid={'month-select'}>
      <SelectMonth onChange={handleChange} {...restProps} />
      <SelectYear onChange={handleChange} {...restProps} />
    </Container>
  )
}

export default MonthSelect

/**
 * Wrapper component around a `<Select />` field to select a month.
 * All months of the year are rendered inside the dropdown list.
 *
 * If the corresponding month in the currently selected year is outside
 * the range of [minDate, maxDate], the month option is disabled
 *
 * @param     props
 */
const SelectMonth = ({ value, minDate, maxDate, onChange }: Props) => {
  const minMonth = minDate ? minDate.startOf('month') : null
  const maxMonth = maxDate ? maxDate.startOf('month') : null

  const monthOptions = range(0, 12).map((offset): Option => {
    const month = value.startOf('year').add(offset, 'months')

    return {
      value: String(month.month()),
      label: month.format('MMMM'),
      isDisabled:
        (!!minMonth && month.isBefore(minMonth)) ||
        (!!maxMonth && month.isAfter(maxMonth)),
    }
  })
  const handleChange = (newValue: string | null) => {
    if (newValue) {
      const nextMonth = parseInt(newValue, 10)
      const nextValue = value.month(nextMonth)
      onChange(nextValue)
    }
  }

  return (
    <Select
      data-testid={'select-month'}
      label={'month'}
      value={String(value.month())}
      options={monthOptions}
      onChange={handleChange}
    />
  )
}

/**
 * Wrapper component around a `<Select />` field to select a year.
 * The range of years to select depends on the range [minDate, maxDate]
 * or the default of [-2 years, +3 years]
 *
 * @param     props
 */
const SelectYear = ({ value, minDate, maxDate, onChange }: Props) => {
  const fromYear = minDate
    ? minDate.startOf('year')
    : dayjs().startOf('year').subtract(2, 'years')

  const toYear = maxDate
    ? maxDate.startOf('year')
    : dayjs().startOf('year').add(3, 'years')

  const yearOptions: Array<Option> = range(
    0,
    toYear.diff(fromYear, 'years') + 1,
  ).map(offset => {
    const year = String(fromYear.add(offset, 'years').year())

    return {
      value: year,
      label: year,
    }
  })

  const handleChange = (newValue: string | null) => {
    if (newValue) {
      const nextYear = parseInt(newValue, 10)
      const nextValue = value.year(nextYear)
      onChange(nextValue)
    }
  }

  return (
    <Select
      label={'year'}
      value={String(value.year())}
      options={yearOptions}
      onChange={handleChange}
    />
  )
}

import { Meta, StoryFn } from '@storybook/react'
import SelectionDisplay, { Props } from './index'

// Context
import DatePickerContextProvider from '../../Context'

export default {
  title: 'components/DatePicker/SelectionDisplay/index.tsx',
  component: SelectionDisplay,
  args: {},
} as Meta

export const PrimaryEmpty: StoryFn<Props> = (args: Props) => (
  <DatePickerContextProvider
    options={[]}
    dateFormat={'YYYY-MM-DD'}
    value={[null, null]}
  >
    <SelectionDisplay {...args} />
  </DatePickerContextProvider>
)

export const PrimarySelected: StoryFn<Props> = (args: Props) => (
  <DatePickerContextProvider
    options={[]}
    dateFormat={'DD.MM.YYYY'}
    value={[null, null]}
  >
    <SelectionDisplay {...args} />
  </DatePickerContextProvider>
)
PrimarySelected.args = {
  range: ['1412-11-11', '1412-11-15'],
}

export const SecondaryEmpty: StoryFn<Props> = (args: Props) => (
  <DatePickerContextProvider
    options={[]}
    dateFormat={'YYYY-MM-DD'}
    value={[null, null]}
  >
    <SelectionDisplay {...args} />
  </DatePickerContextProvider>
)
SecondaryEmpty.args = {}

export const SecondarySelected: StoryFn<Props> = (args: Props) => (
  <DatePickerContextProvider
    options={[]}
    dateFormat={'DD.MM.YYYY'}
    value={[null, null]}
  >
    <SelectionDisplay {...args} />
  </DatePickerContextProvider>
)
SecondarySelected.args = {
  range: ['1412-11-11', '1412-11-15'],
}

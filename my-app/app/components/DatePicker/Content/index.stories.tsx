import { Meta, StoryFn } from '@storybook/react'

// Components
import DatePickerContent, { Props } from './index'

// Context
import DateSelectContextProvider from '../Context'
import { QuickOption, TabOptions } from '../types'

export default {
  title: 'components/DatePicker/Content',
  component: DatePickerContent,
} as Meta

const options = [
  {
    id: 'optionQS1_1',
    label: <span>Option S1 1</span>,
    value: ['2023-01-01', '2023-02-07'],
  },
  {
    id: 'optionQS1_2',
    label: <span>Option S1 2</span>,
    value: ['2024-03-01', '2024-05-07'],
  },
  {
    id: 'optionQS1_3',
    label: <span>Option S1 3</span>,
    value: ['2024-04-01', '2024-04-07'],
  },
  {
    id: 'optionQS2_1',
    label: <span>Option S2 1</span>,
    value: ['2024-01-01', '2024-02-07'],
  },
  {
    id: 'optionQS2_2',
    label: <span>Option S2 2</span>,
    value: ['2024-06-01', '2024-06-07'],
  },
  {
    id: 'optionQS2_3',
    label: (
      <span>
        Option S2 3Option S2 3Option S2 3Option S2 3Option S2 3Option S2 3Option
        S2 3Option S2 3
      </span>
    ),
    value: ['2024-08-01', '2024-08-07'],
  },
] as Array<QuickOption>

const setValue = val => console.info('value', val)
const handleDeleteOption = (optionId: string) => {
  console.info('delete', optionId)
}

const handleRenameOption = (optionId: string, newName: string) => {
  console.info('rename', optionId, 'to', newName)
}

export const Default: StoryFn<Props> = (args: Props) => (
  <DateSelectContextProvider
    value={[null, null]}
    options={options}
    dateFormat={'DD.MM.YYYY'}
    setValue={setValue}
  >
    <DatePickerContent {...args} />
  </DateSelectContextProvider>
)
Default.args = {
  defaultTab: TabOptions.CustomRange,
  maxDays: 30,
  startOfWeek: 1,
  numberCalendars: 3,
  onChange: () => null,
}

export const DefaultValue: StoryFn<Props> = (args: Props) => (
  <DateSelectContextProvider
    value={options[0].value}
    options={options}
    dateFormat={'DD.MM.YYYY'}
    setValue={setValue}
    handleOptionDelete={handleDeleteOption}
    handleOptionRename={handleRenameOption}
  >
    <DatePickerContent {...args} />
  </DateSelectContextProvider>
)
DefaultValue.args = {
  defaultTab: TabOptions.QuickSelect,
  maxDays: 30,
  startOfWeek: 1,
  numberCalendars: 2,
  onChange: () => null,
}

export const Comparison: StoryFn<Props> = (args: Props) => (
  <DateSelectContextProvider
    value={options[0].value}
    options={options}
    dateFormat={'DD.MM.YYYY'}
    setValue={setValue}
    handleOptionDelete={handleDeleteOption}
    handleOptionRename={handleRenameOption}
  >
    <DatePickerContent {...args} />
  </DateSelectContextProvider>
)
Comparison.args = {
  defaultTab: TabOptions.CustomRange,
  maxDays: 30,
  startOfWeek: 1,
  numberCalendars: 2,
  onChange: () => null,
}

export const EmptyQS: StoryFn<Props> = (args: Props) => (
  <DateSelectContextProvider
    value={[null, null]}
    options={[]}
    dateFormat={'DD.MM.YYYY'}
    setValue={setValue}
    handleOptionDelete={handleDeleteOption}
    handleOptionRename={handleRenameOption}
  >
    <DatePickerContent {...args} />
  </DateSelectContextProvider>
)
EmptyQS.args = {
  defaultTab: TabOptions.QuickSelect,
  maxDays: 30,
  startOfWeek: 1,
  numberCalendars: 2,
  onChange: () => null,
}

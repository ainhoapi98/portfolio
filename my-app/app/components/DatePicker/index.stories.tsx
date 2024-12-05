import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

// Components
import DatePicker, { DatePickerProps as Props } from './index'
import { QuickOption, TabOptions } from 'types/dates'

const StatefullVersion = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState(props.value)
  return (
    <DatePicker {...props} value={selectedValue} setValue={setSelectedValue} />
  )
}

export default {
  title: 'components/DatePicker',
  component: StatefullVersion,
  args: {
    selectRangeLabel: <span>Select Range</span>,
    renderTabLabels: (tab: TabOptions) =>
      tab === TabOptions.CustomRange ? (
        <span>Custom Range</span>
      ) : (
        <span>Quick Select</span>
      ),
    doneLabel: <span>Done</span>,
    noOptionsProvidedLabel: (
      <span>No options were provided for Quick Select</span>
    ),
    dateFormat: 'YYYY-MM-DD',
    options: [],
  },
  parameters: {},
} as Meta<typeof StatefullVersion>

export const Default: StoryFn<Props> = (args: Props) => (
  <StatefullVersion {...args} />
)
Default.args = {
  minDate: '2024-01-01',
  maxDate: '2025-05-01',
  value: { primaryRange: [null, null], secondaryRange: [null, null] },
  startOfWeek: 1,
  numberCalendars: 2,
  maxDays: 30,
  defaultTab: TabOptions.QuickSelect,
  onChange: () => null,
}

export const CustomRange: StoryFn<Props> = (args: Props) => (
  <StatefullVersion {...args} />
)
CustomRange.args = {
  minDate: '2024-01-01',
  maxDate: '2025-05-01',
  value: { primaryRange: [null, null], secondaryRange: [null, null] },
  startOfWeek: 1,
  numberCalendars: 2,
  maxDays: 30,
  defaultTab: TabOptions.CustomRange,
  onChange: () => null,
}

const options = [
  {
    id: 'optionQS1_1',
    label: <span>Option S1 1</span>,
    value: {
      primaryRange: ['2024-01-01', '2024-02-07'],
      secondaryRange: ['2023-01-01', '2023-02-07'],
    },
  },
  {
    id: 'optionQS1_2',
    label: <span>Option S1 2</span>,
    value: {
      primaryRange: ['2024-03-01', '2024-05-07'],
      secondaryRange: ['2023-03-01', '2023-05-07'],
    },
  },
  {
    id: 'optionQS1_3',
    label: <span>Option S1 3</span>,
    value: {
      primaryRange: ['2024-04-01', '2024-04-07'],
      secondaryRange: ['2023-04-01', '2023-04-07'],
    },
  },
] as Array<QuickOption>

export const QSPreselectedValue: StoryFn<Props> = (args: Props) => (
  <StatefullVersion {...args} />
)
QSPreselectedValue.args = {
  minDate: '2024-01-01',
  maxDate: '2025-05-01',
  value: options[2].value,
  startOfWeek: 1,
  numberCalendars: 2,
  maxDays: 30,
  defaultTab: TabOptions.QuickSelect,
  onChange: () => null,
  options,
}

export const CustomRangePreselectedValue: StoryFn<Props> = (args: Props) => (
  <StatefullVersion {...args} />
)
CustomRangePreselectedValue.args = {
  minDate: '2024-01-01',
  maxDate: '2025-05-01',
  value: options[2].value,
  startOfWeek: 1,
  numberCalendars: 2,
  maxDays: 30,
  defaultTab: TabOptions.CustomRange,
  onChange: () => null,
  options,
}

import { Meta, StoryFn } from '@storybook/react'
import SingleSelect, { Props } from './index'

export default {
  title: 'components/Calendar/SingleSelect/index.tsx',
  component: SingleSelect,
} as Meta

export const SingleSelectGroup: StoryFn<Props> = (args: Props) => (
  <SingleSelect {...args} />
)
SingleSelectGroup.args = {
  initValue: [null],
  startOfWeek: 1,
  numberCalendars: 2,
  minDate: '2023-07-05',
  maxDate: '2024-05-01',
}

export const SingleCalendar: StoryFn<Props> = (args: Props) => (
  <SingleSelect {...args} />
)
SingleCalendar.args = {
  initValue: [null],
  startOfWeek: 1,
  numberCalendars: 1,
  minDate: '2023-07-05',
  maxDate: '2024-05-01',
}

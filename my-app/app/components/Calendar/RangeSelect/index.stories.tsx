import { Meta, StoryFn } from '@storybook/react'
import dayjs from 'dayjs'

import RangeSelect, { Props } from './index'

export default {
  title: 'components/Calendar/RangeSelect/index.tsx',
  component: RangeSelect,
} as Meta

export const RangeSelectGroup: StoryFn<Props> = (args: Props) => (
  <RangeSelect {...args} />
)
RangeSelectGroup.args = {
  minDate: dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
  maxDate: dayjs().add(1, 'month').format('YYYY-MM-DD'),
  value: [null, null],
  startOfWeek: 1,
  numberCalendars: 2,
  maxDays: 30,
}

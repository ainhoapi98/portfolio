import { Meta, StoryFn } from '@storybook/react'
import dayjs from 'dayjs'

import Calendar, { Props } from './index'

export default {
  title: 'components/Calendars/Base/index.tsx',
  component: Calendar,
} as Meta

export const Basic: StoryFn<Props> = (args: Props) => (
  <div style={{ width: 'fit-content' }}>
    <Calendar {...args} />
  </div>
)
Basic.args = {
  month: dayjs('2023-07-20'),
  startOfWeek: 1,
}

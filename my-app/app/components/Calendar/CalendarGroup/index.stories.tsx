import { Meta, StoryFn } from '@storybook/react'

// Components
import CalendarGroup, { Props } from './index'

export default {
  title: 'components/Calendar/CalendarGroup/index.tsx',
  component: CalendarGroup,
} as Meta

export const BasicGroup: StoryFn<Props> = (args: Props) => (
  <CalendarGroup {...args} />
)
BasicGroup.args = {
  startOfWeek: 1,
  numberCalendars: 2,
}

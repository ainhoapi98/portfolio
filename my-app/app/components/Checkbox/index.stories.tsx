import { Meta, StoryFn } from '@storybook/react'
import Checkbox from './index'

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  args: {},
  parameters: {},
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => <Checkbox />

export const Default = Template.bind({})
Default.args = {}

import { StoryFn, Meta } from '@storybook/react'
import Toggle from './index'

export default {
  title: 'inputs/Toggle',
  component: Toggle,
  args: {
    isChecked: true,
    onToggle: (checked: boolean) => console.trace(checked),
  },
  parameters: {},
} as Meta<typeof Toggle>

const Template: StoryFn<typeof Toggle> = args => <Toggle {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: <span>Toggle</span>,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: <span>Toggle</span>,
  isDisabled: true,
}

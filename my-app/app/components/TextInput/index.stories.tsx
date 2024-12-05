import { Meta, StoryFn } from '@storybook/react'
import TextInput from './index'

export default {
  title: 'components/TextInput',
  component: TextInput,
  args: {
    id: 'input-test',
  },
  parameters: {
    test: {
      delay: 150, // Wait animation transition time of 125ms
    },
  },
} as Meta<typeof TextInput>

const Template: StoryFn<typeof TextInput> = args => <TextInput {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'label',
}

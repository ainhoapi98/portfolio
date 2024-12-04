import { StoryFn, Meta } from '@storybook/react'
import TextInput from './index'

export default {
  title: 'inputs/TextInput',
  component: TextInput,
  args: {
    id: 'input-test',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/VwIAD7kNluCAsDEnfI4DPA/HQ-Revenue---Design-System-Revamp?type=design&node-id=3867%3A45190&mode=design&t=mqtkl1DaUHh410WY-1',
    },
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

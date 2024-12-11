import { Meta, StoryFn } from '@storybook/react'
import ToDoItem from './index'
import withSize from '../../../../../.storybook/decorators/withSize'
import PopoversProvider from '../../../../providers/Popovers'

export default {
  title: 'containers/Modals/ToDoItem',
  component: ToDoItem,
  args: {
    handleClose: () => null,
  },
  parameters: {},
  decorators: [Story => withSize(Story, 80, 400)],
} as Meta<typeof ToDoItem>

const Template: StoryFn<typeof ToDoItem> = args => (
  <PopoversProvider>
    <ToDoItem {...args} />
  </PopoversProvider>
)

export const Default = Template.bind({})
Default.args = {}

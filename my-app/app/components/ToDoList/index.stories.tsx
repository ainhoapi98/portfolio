import { Meta, StoryFn } from '@storybook/react'
import ToDoList from './index'
import withSize from '../../../.storybook/decorators/withSize'
import { Item } from '../../types/Item'

const items: Array<Item> = [
  { id: '1', name: 'Item 1', date: '2024-01-01', isCompleted: false },
  { id: '2', name: 'Item 2', date: '2024-01-02', isCompleted: false },
  { id: '3', name: 'Item 3', date: '2024-01-03', isCompleted: true },
  { id: '4', name: 'Item 4', date: '2024-01-04', isCompleted: true },
]

export default {
  title: 'components/ToDoList',
  component: ToDoList,
  args: {},
  parameters: {},
  decorators: [Story => withSize(Story, 80, 400)],
} as Meta<typeof ToDoList>

const Template: StoryFn<typeof ToDoList> = args => <ToDoList items={items} />

export const Default = Template.bind({})
Default.args = {}

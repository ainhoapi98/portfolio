import { Meta, StoryFn } from '@storybook/react'
import Dropdown, { Option } from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'components/Dropdown',
  component: Dropdown,
  args: {
    label: 'Select Option',
    value: null,
  },
  parameters: {},
} as Meta<typeof Dropdown>

const options: Array<Option> = [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  {
    id: '3',
    label: 'Item 3',
    renderLabel: () => (
      <>
        <span>Item 3</span> <FontAwesomeIcon icon={faSquareCheck} />
      </>
    ),
  },
]

const Template: StoryFn<typeof Dropdown> = args => (
  <Dropdown {...args}></Dropdown>
)

export const Default = Template.bind({})
Default.args = {
  options,
}

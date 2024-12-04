import { Meta, StoryFn } from '@storybook/react'

import Button from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  parameters: {
    actions: {
      handles: ['click', 'click'],
    },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  $variant: 'primary',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  $variant: 'primary',
  disabled: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  $variant: 'secondary',
}

export const SecondaryWithButtonRight = Template.bind({})
SecondaryWithButtonRight.args = {
  $variant: 'secondary',
  children: (
    <>
      <span>button</span>
      <FontAwesomeIcon icon={faStar} />
    </>
  ),
}

export const SecondaryWithButtonLeft = Template.bind({})
SecondaryWithButtonLeft.args = {
  $variant: 'secondary',
  children: (
    <>
      <FontAwesomeIcon icon={faStar} />
      <span>button</span>
    </>
  ),
}

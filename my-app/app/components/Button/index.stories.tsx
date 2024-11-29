import Button from "./index";
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'components/Button',
    component: Button,
    args: {
    },
    parameters: {},
} as Meta<typeof Button>


const Template: StoryFn<typeof Button> = args => (
    <Button {...args}>
        CLICK ME
    </Button>
)


export const Default = Template.bind({})
Default.args = {
    onClick: () => console.info('clicked'),
}


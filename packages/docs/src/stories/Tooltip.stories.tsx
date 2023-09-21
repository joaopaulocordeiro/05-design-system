import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Testando tooltip</Button>,
    content: 'Teste Tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj<TooltipProps> = {}

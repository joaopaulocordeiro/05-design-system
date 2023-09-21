import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from '../../types/ComponentsProps'
import { ReactNode } from 'react'

export type TooltipProps = ComponentProps<typeof Tooltip.Root> & {
  content: string | ReactNode
}

export function TooltipComponent({
  content,
  children,
  ...props
}: TooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root {...props}>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            {content}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

TooltipComponent.displayName = 'Tooltip'

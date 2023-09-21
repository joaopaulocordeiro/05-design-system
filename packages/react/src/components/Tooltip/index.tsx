import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps } from '../../types/ComponentsProps'
import { ReactNode } from 'react'
import { ToolTipContent } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipRadix.Root> & {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...props}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <ToolTipContent>
            {content}
            <TooltipRadix.Arrow />
          </ToolTipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

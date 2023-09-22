import * as ToastRadix from '@radix-ui/react-toast'
import { ComponentProps } from '../../types/ComponentsProps'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { useRef } from 'react'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
}

export function Toast({ title, ...props }: ToastProps) {
  const eventDateRef = useRef(new Date())

  function prettyDate(date: Date) {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(date)
  }

  return (
    <ToastRadix.Provider swipeDirection="right">
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'

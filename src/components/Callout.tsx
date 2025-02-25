import React from 'react'
import { Callout as Co } from '@radix-ui/themes'

interface CalloutProps {
  icon?: React.ReactNode;
  text: string;
  [key: string]: any
}

export default function Callout({ icon, text, ...props }: CalloutProps) {
  return (
    <Co.Root {...props}>
      {icon && (
        <Co.Icon>
          {icon}
        </Co.Icon>
      )}

      <Co.Text>{text}</Co.Text>
    </Co.Root>
  )
}

import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link';

interface HeaderNavButtonProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  height: number;
  to: string;
}

export default function HeaderNavButton({ Icon, height, to }: HeaderNavButtonProps) {
  return (
    <Link href={to}>
      <Button variant="ghost" color="gray">
        <Icon height={height} color='var(--gray-12)' />
      </Button>
    </Link>
  )
}

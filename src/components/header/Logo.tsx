'use client'
import KapiLogo from '@/assets/kapi-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import useTheme from '@/hooks/useTheme'


export default function Logo() {
  const { theme } = useTheme()

  return (
    <Link href="/">
      <Image width={45} height={0} alt='Kapi Logo' style={{ filter: theme === 'light' ? 'invert(100%)' : 'invert(0)' }} src={KapiLogo} />
    </Link>
  )
}

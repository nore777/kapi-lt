import { Flex, Button, Text } from '@radix-ui/themes'
import HeaderNavButton from './HeaderNavButton'
import { Home, Newspaper, PlusIcon, LogIn as LoginIcon, UserPlus as RegisterIcon } from 'lucide-react'
import ProfileDropdown from './ProfileDropdown'
import Link from 'next/link'

interface NavigationProps {
  isLoggedIn: boolean
}

const buttonSize = 18

export default function Navigation({ isLoggedIn }: NavigationProps) {

  return (
    <Flex align="center" gap="5">
      <>
        <HeaderNavButton Icon={Home} height={buttonSize} to='/' />
        <HeaderNavButton Icon={Newspaper} height={buttonSize} to='/news' />

        {isLoggedIn && <>
          <Link href={"/create/news"}>
            <Button variant='solid' style={{ color: 'var(--gray-1)', background: 'var(--gray-12)' }}>
              <PlusIcon height={buttonSize} />
              Kurti
            </Button>
          </Link>
          <ProfileDropdown />

        </>}

        {!isLoggedIn && <>
          <Link href={"/login"}>
            <Button variant="outline" color='gray'>
              <LoginIcon height={buttonSize} />
              <Flex display={{ initial: 'none', xs: 'flex' }}>
                <Text>Prisijungimas</Text>
              </Flex>
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button variant="outline" color='gray'>
              <RegisterIcon height={buttonSize} />
              <Flex display={{ initial: 'none', xs: 'flex' }}>
                <Text>Registracija</Text>
              </Flex>
            </Button>
          </Link>
        </>}
      </>
    </Flex>
  )
}

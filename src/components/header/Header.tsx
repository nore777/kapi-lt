'use client'
import { Flex } from '@radix-ui/themes';
import Navigation from './Navigation';
import Logo from './Logo';
import { useAuth } from '@/context/AuthProvider';


export default function Header() {
  const { isLoggedIn } = useAuth()

  return (
    <header>
      <Flex
        width="100wv"
        height={{ initial: "50px" }}
        justify="center"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'var(--slate-2)',
          borderBottom: '1px solid var(--slate-5)',
        }}
      >
        <Flex
          width={{ initial: '95vw', md: '1000px' }}
          gap={"6"}
          justify={"between"}
          align={"center"}
        >
          <Logo />
          <Navigation isLoggedIn={isLoggedIn} />
        </Flex>
      </Flex>
    </header>
  );
}

import React from "react"
import { Flex } from "@radix-ui/themes"
import { Breakpoint } from "@radix-ui/themes/props"

interface LayoutProps {
  children: React.ReactNode,
  width?: { [key in Breakpoint]?: string } // Define width as a breakpoint-based object.
}

const Layout: React.FC<LayoutProps> = ({ children, width = { initial: '100%', md: '1000px', lg: '1024px' } }) => {
  return (
    <Flex direction={'column'} align={'center'} width={'100vw'} minHeight={'100vh'}>
      <Flex
        px={{ initial: '2', sm: '9' }}
        gap={'6'}
        direction={'column'}
        mt={'9'}
        width={width}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout

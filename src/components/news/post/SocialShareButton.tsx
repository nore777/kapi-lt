import React from "react"
import { Button, Flex } from "@radix-ui/themes"
import './SocialShareButton.css'


interface SocialShareButtonProps {
  children: React.ReactNode
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({ children }) => {

  return (
    <Button
      className="social-share-button"
      color="gray"
      variant="soft"
      style={{ height: 'auto' }}

    >
      <Flex py={'2'} direction={'column'}>
        {children}
      </Flex>
    </Button>
  )
}


export default SocialShareButton

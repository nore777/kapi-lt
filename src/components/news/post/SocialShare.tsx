import { Box, Flex, Text, Separator } from "@radix-ui/themes"
import { HeartIcon, BookmarkIcon, FacebookIcon, LinkedinIcon } from "lucide-react"
import SocialShareButton from "./SocialShareButton"
import formatThousands from "@/utils/formatThousands"

const SocialShare = ({ likes }: { likes: number }) => {

  return (
    <Box position={{ initial: 'static', md: 'sticky' }} top={'80px'} style={{ zIndex: '1' }}>
      <Box
        position={{ initial: 'static', md: 'absolute' }}
        left="-155px"
        display={{ initial: 'block' }}
      >
        <Flex
          px={{ initial: '0', xs: '9' }}
          direction={{ initial: 'row', md: 'column' }}
          align={{ initial: 'center', md: 'end' }}
          gap="3"
        >
          <SocialShareButton>
            <Box>
              <HeartIcon color={'var(--orange-9)'} size={16} />{" "}
            </Box>
            <Text size="1">{formatThousands(likes)}</Text>
          </SocialShareButton>

          <Separator size={{ initial: '4', md: '1' }} />

          <SocialShareButton>
            <BookmarkIcon size={16} />
          </SocialShareButton>

          <SocialShareButton>
            <FacebookIcon size={16} />
          </SocialShareButton>

          <SocialShareButton>
            <LinkedinIcon size={16} />
          </SocialShareButton>
        </Flex>
      </Box>
    </Box >
  )
}


export default SocialShare

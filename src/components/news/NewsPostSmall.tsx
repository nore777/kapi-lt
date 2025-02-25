import React from "react"
import INewsPost from "../../interface/INewsPost"
import { Flex, Text, Box } from "@radix-ui/themes"
import './NewsPostSmall.css'

interface NewsPostSmallProps {
  post: INewsPost
}

const NewsPostSmall: React.FC<NewsPostSmallProps> = ({ post }) => {
  return (
    <Box className="NewsPostSmall" p={"2"} width={"auto"} my={'2'}>
      <Text style={{ textDecorationLine: 'underline', textDecorationColor: 'var(--indigo-7)', textDecorationThickness: 2 }} size={'3'}>
        {post.title}
      </Text>

      <Flex justify={'between'}>
        <Text color="blue">
          @{post.author.username}
        </Text>
        <Text color="gray">
          Prieš n. min.
        </Text>
      </Flex>
    </Box>
  )
}

export default NewsPostSmall

import React from "react"
import INewsPost from "../../interface/INewsPost"
import { AspectRatio } from "@radix-ui/themes"
import { Flex, Heading, Text } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import NewsPostCategory from "./NewsPostCategory"
import './NewsPost.css'
import timeAgo from "@/utils/timeAgo"
import NewsPostTags from "./NewsPostTags"

interface NewsPostProps {
  post: INewsPost
}

const NewsPost: React.FC<NewsPostProps> = ({ post }) => {
  const author = post.author.firstName && post.author.lastName ?
    `${post.author.firstName} ${post.author.lastName}` : `@${post.author.username}`

  return (
    <Link style={{ all: 'unset' }} href={`/news/${post.path}`}>
      <Flex className='news-post' direction={'column'} gap={'2'} style={{ width: "100%", cursor: 'pointer' }} mb={'3'}>
        <AspectRatio ratio={16 / 10}>
          <Image
            alt="News post image"
            style={{ borderRadius: '0px', objectFit: 'cover', background: 'var(--gray-3)' }}
            fill
            src={'/images/' + post.thumbnail}
          />
        </AspectRatio>

        <Heading as="h1" size={'5'} >
          {post.title}
        </Heading>

        <NewsPostCategory category={post.category} />
        <NewsPostTags tags={post.tags} />

        <Flex justify={'between'}>
          <Text size={'2'} color="blue">
            {author}
          </Text>
          <Text size={'2'} color="gray">
            {timeAgo(new Date(post.createdAt), true)}
          </Text>
        </Flex>
      </Flex >
    </Link>
  )
}

export default NewsPost

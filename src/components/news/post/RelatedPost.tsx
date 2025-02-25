import { Card, Text, Flex, Heading, Separator } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import NewsPostTags from "../NewsPostTags"
import NewsPostCategory from '../NewsPostCategory'
import INewsPost from "@/interface/INewsPost"
import formatDate from "@/utils/formatDate"
import '../NewsPost.css'
import { Calendar } from "lucide-react"

interface RelatedPostProps {
  post: INewsPost
}

const RelatedPost: React.FC<RelatedPostProps> = ({ post }) => {
  return (
    <Link style={{ all: 'unset' }} href={`/news/${post.path}`}>
      <Card className="news-post" style={{ padding: 0, boxShadow: '0 7px 12px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}>
        <Image
          src={'/images/' + post.thumbnail}
          alt={post.title}
          width={300}
          height={200}
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
        />
        <Flex p={'2'} py={"4"} gap={'2'} direction={'column'}>
          <Heading size="4" weight="medium">{post.title}</Heading>
          <NewsPostCategory category={post.category} />
          <NewsPostTags tags={post.tags} />
          <Separator size={'4'} />
          <Flex gap={'1'} align={'center'}>
            <Calendar size={15} color="gray" />
            <Text size="1" color="gray" mt="1">{formatDate(post.createdAt)}</Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  )
}

export default RelatedPost

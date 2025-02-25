import Layout from "@/components/Layout";
import {
  Flex,
  Box,
  Text,
  Heading,
  Avatar,
  Button,
  Card,
} from "@radix-ui/themes";
import {
  CalendarIcon,
  ClockIcon,
  EyeIcon,
} from "lucide-react";
import Image from "next/image";
import RelatedArticles from "@/components/news/post/RelatedArticles";
import SocialShare from "@/components/news/post/SocialShare";
import NewsPostTags from "@/components/news/NewsPostTags";
import NewsPostCategory from "@/components/news/NewsPostCategory"
import formatDate from "@/utils/formatDate";
import getNewsPost from "./getNewsPost";


/*
const Comment = ({ author, content, time, likes }) => (
  <Box mb="4">
    <Flex gap="3">
      <Avatar
        size="2"
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
        fallback="U"
      />
      <Box flex="1">
        <Flex justify="between" align="start">
          <Box>
            <Text weight="medium" size="3">{author}</Text>
            <Text size="1" color="gray"> {time}</Text>
          </Box>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" size="1">
                <MoreHorizontalIcon size={16} />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <FlagIcon size={14} /> Report
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
        <Text size="3" mt="2">{content}</Text>
        <Flex gap="3" mt="2">
          <Button variant="ghost" size="1">
            <ThumbsUpIcon size={14} /> {likes}
          </Button>
          <Button variant="ghost" size="1">
            <ThumbsDownIcon size={14} />
          </Button>
          <Button variant="ghost" size="1">Reply</Button>
        </Flex>
      </Box>
    </Flex>
  </Box>
);
*/



async function NewsPost({ params }: { params: Promise<{ post: string }> }) {
  const param = await params
  const { post, relatedPosts } = await getNewsPost(param.post)


  return (
    <Layout width={{ initial: '100%', md: '800px' }}>
      <Box>

        {/* Article Header */}
        <Box mb="6">
          <NewsPostCategory category={post.category} />

          <Heading size="8" my="4" style={{ lineHeight: 1.2 }}>
            {post.title}
          </Heading>

          <Box mb="4">
            <Text size="3" color="gray">
              {post.excerpt}
            </Text>
          </Box>

          <Flex
            justify="between"
            align="center"
            mb="4"
            direction={{ initial: 'column', sm: 'row' }}
            gap="3"
          >
            <Flex align="center" gap="3">
              <Avatar
                size="3"
                src={'/images/' + post.author.avatar}
                fallback="A"
              />
              <Box>
                <Flex align="center" gap="2">
                  <Text weight="medium">
                    {post.author.firstName && post.author.lastName
                      ?
                      post.author.firstName + ' ' + post.author.lastName
                      :
                      post.author.username
                    }
                  </Text>
                  <Button
                    variant={'solid'}
                    size="1"
                  >
                    Sekti
                  </Button>
                </Flex>
                <Text size="2" color="gray">Autorius</Text>
              </Box>
            </Flex>

            <Flex gap="3" align="center">
              <Flex align="center" gap="1">
                <ClockIcon size={16} />
                <Text size="2" color="gray">{post.minutesToRead} min. sk.</Text>
              </Flex>
              <Flex align="center" gap="1">
                <EyeIcon size={16} />
                <Text size="2" color="gray">{post.views} peržiūrų</Text>
              </Flex>
              <Flex align="center" gap="1">
                <CalendarIcon size={16} />
                <Text size="2" color="gray">{formatDate(post.createdAt)}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        {/* Floating Components */}
        <SocialShare likes={post.likes} />


        {/* Featured Image */}
        <Box my="6" position="relative">
          <Image
            src={`/images/${post.thumbnail}`}
            alt="AI Technology"
            width={1200}
            height={600}
            priority
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />
          <Text size="1" color="gray" mt="1">
            Nuotrauka:
          </Text>
        </Box>

        {/* Article Content */}
        <Box
          dangerouslySetInnerHTML={{ __html: post.content }} // TODO: check if vulnerable
          className="article-content"
          style={{ fontSize: '14pt', lineHeight: 1.8 }}
        >
        </Box>

        {/* Tags */}
        <NewsPostTags tags={post.tags} />

        {/* Author Bio */}
        <Card mt="6">
          <Flex gap="4" p="4">
            <Avatar
              size="5"
              src={'/images/' + post.author.avatar}
              fallback="A"
            />
            <Box>
              <Heading size="3" mb="2">Apie autorių</Heading>
              <Text as="p" size="2" mb="3">
              </Text>
            </Box>
          </Flex>
        </Card>

        {relatedPosts.length > 0 && <RelatedArticles posts={relatedPosts} />}

      </Box>

    </Layout>
  );
};

export default NewsPost;

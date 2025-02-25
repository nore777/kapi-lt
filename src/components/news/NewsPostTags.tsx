import { Flex, Text } from "@radix-ui/themes"

interface NewsPostTagsProps {
  tags: string[]
}

const NewsPostTags: React.FC<NewsPostTagsProps> = ({ tags }) => {
  return (
    <Flex gap="1" wrap="wrap">
      {tags.map((tag: string, index: number) => (
        <Text
          key={index}
          size="1"
          weight={'medium'}
          style={{
            background: 'var(--gray-a3)',
            padding: '2px 10px',
            borderRadius: '0px',
          }}
        >
          {tag.toUpperCase()}
        </Text>
      ))}
    </Flex>

  )
}

export default NewsPostTags

import { Flex, Text } from "@radix-ui/themes"

interface NewsPostCategoryProps {
  category: string
}

const NewsPostTags: React.FC<NewsPostCategoryProps> = ({ category }) => {
  return (
    <Flex gap="1" wrap="wrap" mt='1'>
      <Text
        size="2"
        weight={'medium'}
        highContrast
        style={{
          background: 'var(--orange-a2)',
          padding: '6px 10px',
          borderRadius: '0px',
          color: 'var(--tomato-11)',
        }}
      >
        {category[0].toUpperCase() + category.slice(1).toLowerCase()}
      </Text>
    </Flex>

  )
}

export default NewsPostTags


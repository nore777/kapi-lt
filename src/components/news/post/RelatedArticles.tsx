import { Heading, Grid, Box } from "@radix-ui/themes"
import RelatedPost from "./RelatedPost"
import INewsPost from "@/interface/INewsPost"

interface RelatedArticlesProps {
  posts: INewsPost[]
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ posts }) => {

  return (
    <Box mt="9">
      <Heading size="7" mb="4">Susiję straipsniai</Heading>

      <Grid columns={{ initial: '1', xs: '2' }} px={{ initial: '0', md: '5' }} pt={'8'} gap="5">
        {posts.map((post: INewsPost, index: number) => {
          return <RelatedPost key={index} post={post} />
        })}
      </Grid>
    </Box>
  )
}

export default RelatedArticles

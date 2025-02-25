import NewsPost from "@/components/news/NewsPost";
import INewsPost from "@/interface/INewsPost";
import { Grid, Heading, Separator } from "@radix-ui/themes";
import Layout from "@/components/Layout";
import getInitialNews from "./getInitialNews";


export default async function News() {
  const data = await getInitialNews();

  if (data.length === 0) {
    return (
      <Layout>
        <Heading>Įrašų nėra</Heading>
        <Separator size={"4"} />
      </Layout>
    );
  }

  return (
    <Layout width={{ initial: "100%", md: "1024px" }}>
      <Heading size={"7"}>Naujienos</Heading>
      <Heading mb={"4"}>Nauja</Heading>
      <Grid
        columns={{ initial: "1", xs: "2", sm: "3", md: "4" }}
        gap="4"
        rows="repeat(2, auto)"
        width="auto"
      >
        {data.map((item: INewsPost, index: number) => {
          return <NewsPost key={index} post={item} />;
        })}
      </Grid>
    </Layout>
  );
}

//export const dynamic = 'force-dynamic'

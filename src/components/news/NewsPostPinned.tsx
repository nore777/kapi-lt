import React from "react";
import INewsPost from "../../interface/INewsPost";
import { Flex, Heading, Text } from "@radix-ui/themes";

interface NewsPostPinnedProps {
  post: INewsPost;
}

const NewsPost: React.FC<NewsPostPinnedProps> = ({ post }) => {
  return (
    <Flex
      direction={"column"}
      gap={"2"}
      style={{
        width: "100%",
        position: "relative", // Set the parent container as relative for absolute positioning of children
        borderRadius: "3px", // Optional: adds rounded corners for the container
        overflow: "hidden", // Ensures content doesn't spill out of the rounded corners
      }}
    >
      {/* Image as a background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${post.thumbnail})`, // Using the image URL from the post
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center", // Centers the image in the container
          zIndex: -1, // Places the image below the content
        }}
      />

      {/* Content Overlay */}
      <Flex
        direction={"column"}
        p={"5"}
        gap={"2"}
        justify={'end'}
        height="100%"
        style={{
          position: "relative", zIndex: 1, background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.6))',
        }}>
        <Heading as="h1" size={"6"} style={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
          {post.title}
        </Heading>

        <Text color="orange" style={{ color: "white", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}>
          {post.category}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NewsPost;

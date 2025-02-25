import React from "react";
import { Box, Flex } from "@radix-ui/themes";

interface ChildrenProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const AuthContainer = ({ children, header }: ChildrenProps) => {
  return (
    <>
      <Flex
        gap={"4"}
        minHeight={"80vh"}
        direction={"column"}
        align={"center"}
        justify={"center"}
      >
        {header}
        <Box height={"100%"} width={{ initial: "90vw", xs: "500px" }}>
          <Box p={{ initial: "0", xs: "5" }}>
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AuthContainer;

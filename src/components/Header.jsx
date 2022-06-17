import { Heading, Center, Box } from "@chakra-ui/react";
import { Searchbar } from "./Searchbar";

export function Header() {
  return (
    <Box as="header" bg="orange.400" padding="4rem">
      <Center
        bg="white"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        transform="matrix(1, -0.04, 0.03, 1, 0, 0)"
        width={["17rem", "23rem", "32rem"]}
        height={["5.5rem", "6.5rem", "7.5rem"]}
        marginX="auto"
      >
        <Heading fontSize={["3rem", "4.2rem", "5rem"]}>Chuck Norris</Heading>
      </Center>
      <Center>
        <Heading
          fontSize={["2rem", "2.5rem", "3rem"]}
          color="white"
          transform="matrix(1, -0.04, 0.03, 1, 0, 0)"
          padding="0.5rem 0 3rem 0"
        >
          jokes generator
        </Heading>
      </Center>
      <Center>
        <Searchbar />
      </Center>
    </Box>
  );
}

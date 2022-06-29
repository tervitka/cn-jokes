import { Box, Text } from "@chakra-ui/react";
import { RiDoubleQuotesL } from "react-icons/ri";

export function JokeCard({ joke, jokeCategory }) {
  return (
    <Box
      bg="gray.100"
      minWidth={["17rem", "23rem", "26rem"]}
      maxWidth={["95%", "45%", "30%"]}
      padding="2rem"
      paddingLeft="4.5rem"
      position="relative"
      boxShadow="base"
    >
      <Box position="absolute" left="1rem" top="1rem">
        <RiDoubleQuotesL size="2.4rem" color="white" />
      </Box>
      <Text>{joke}</Text>
      <Box marginTop="1rem">
          {jokeCategory ? (
            <Text as="i" textAlign="right">
              #{jokeCategory}
            </Text>
          ) : (
            <Text as="i" textAlign="right">
              #All Categories
            </Text>
          )}
      </Box>
    </Box>
  );
}

import { Box, Text } from "@chakra-ui/react";
import { RiDoubleQuotesL } from "react-icons/ri";

export function JokeCard({ joke }) {
  return (
    <Box
      bg="gray.100"
      borderRadius="5"
      maxWidth={["95%", "95%", "45%", "45%", "30%"]}
      padding="8"
      paddingLeft="16"
      position="relative"
    >
        <Box position="absolute" left="4" top="4">
          <RiDoubleQuotesL size="2.4rem" color="white" />
        </Box>
        <Text>{joke}</Text>
    </Box>
  );
}

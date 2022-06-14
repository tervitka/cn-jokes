import { Box } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { RiDoubleQuotesL } from "react-icons/ri";

export function JokeCard({ joke }) {
  return (
    <Box
      bg="gray.100"
      borderRadius="5"
      maxWidth="30%"
      padding="8"
      paddingLeft="16"
      position="relative"
    >
      <IconContext.Provider value={{ color: "white", size: "30px" }}>
        <Box position="absolute" left="4" top="4" as="icon">
          <RiDoubleQuotesL size="2.4rem" />
        </Box>
      </IconContext.Provider>
      {joke}
    </Box>
  );
}

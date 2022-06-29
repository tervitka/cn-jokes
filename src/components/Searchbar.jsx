import {Box, Center, Input, InputGroup, InputRightAddon, Text} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export function Searchbar() {
  return (
    <Center
      width={["16rem", "19rem", "26rem"]}
      height="3rem"
      bg="white"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
      borderRadius="0.7rem"
    >
      <InputGroup position="relative">
        <Input
          type="text"
          borderColor="white"
          disabled
          placeholder="search for a joke"
        />
        <InputRightAddon
          children={<FiSearch size="2rem" />}
          borderColor="white"
          bg="white"
        />

        <Box
          backgroundColor="orange.400"
          boxShadow="2px 2px 3px"
          bottom={["-.85rem", "-.5rem"]}
          padding=".25rem"
          position="absolute"
          right="25px"
          transform="matrix(1, -0.04, 0.03, 1, 0, 0)"
        >
          <Text>
            Coming Soon
          </Text>
        </Box>
      </InputGroup>
    </Center>
  );
}

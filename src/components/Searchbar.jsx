import { Center, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export function Searchbar() {
  return (
    <>
      <Center
        fontFamily="Lato, sans-serif"
        w="400px"
        h="45px"
        bg="white"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
        borderRadius="12px"
        p="10px"
        m="0"
      >
        <InputGroup>
          <Input
            type="text"
            placeholder="search for a joke"
            borderColor="white"
          />
          <InputRightAddon
            children={<FiSearch size="2rem" />}
            borderColor="white"
            bg="white"
          />
        </InputGroup>
      </Center>
    </>
  );
}

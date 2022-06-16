
import { Center, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export function Searchbar() {

  return (
    <>
      <Center
        width={["16rem", "19rem", "26rem"]}
        height="3rem"
        bg="white"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
        borderRadius={12}
      >
        <InputGroup>
          <Input
            type="text"
            borderColor="white"
            placeholder="search for a joke"
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

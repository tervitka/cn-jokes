import { Center, Input } from "@chakra-ui/react";

export function Searchbar() {
  return (
    <>
      <Center
        fontFamily="Lato, sans-serif"
        w="400px"
        h="45px"
        bg="#e5e5e5"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
        borderRadius="12px"
        p="10px"
        m="0"
      >
        <Input type="text" placeholder="search for a joke"></Input>
      </Center>
    </>
  );
}

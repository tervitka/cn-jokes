
import { useState, useCallback } from "react";
import { JokeCard } from "./JokeCard";
import { ParametersForm } from "./ParametersForm";
import { Container, Flex, Heading, Button, Center } from "@chakra-ui/react";

export function JokeListPage() {

  const [joke, setJoke] = useState("")

  const handleSetJoke = useCallback((value) => {
    setJoke(value)
  },[])
  return (
    <>
      <Container
        as="main"
        maxW="container.xl"
        display="flex"
        alignContent="center"
        flexDirection="column"
      >
        <Heading
          as="h3"
          size="md"
          marginBottom="3"
          fontSize={["1.5rem", "2rem"]}
          mt="8"
          position="center"
        >
          let's generate:
        </Heading>

        <Flex
          marginTop="3"
          marginBottom="14"
          alignItems="center"
          justifyContent="center"
        >
          <ParametersForm handleSetJoke={handleSetJoke} />
        </Flex>
      </Container>

          <Container>
            <Flex justify="center" gap="4" flexWrap="wrap" flexDirection="row">
               <JokeCard joke={joke}/>
            </Flex>
          </Container>

      <Center>
        <Button
          boxShadow="1px 4px 4px 1px green"
          borderRadius="10"
          bg="white"
          color="green"
          type="submit"
          height="45px"
          fontFamily="Londrina Solid, cursive"
          fontWeight="light"
          fontSize="1.5rem"
          position="center"
          marginTop="25"
        >
          go back up
        </Button>
      </Center>
    </>
  );
}

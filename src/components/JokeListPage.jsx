
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
          marginTop="8"
          fontSize={["1.5rem", "2rem"]}
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
          bg="white"
          color="green"
          position="center"
          marginTop="25"
          height="3rem"
          fontSize="1.5rem"
        >
          go back up
        </Button>
      </Center>
    </>
  );
}

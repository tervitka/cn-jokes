import { Container, Flex, Heading, Button, Center } from "@chakra-ui/react";
import { JokeCard } from "./JokeCard";
import { ParametersForm } from "./ParametersForm";

const jokeText =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dapibus augue non sapien. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.";

export function JokeListPage() {
  return (
    <>
      <Container
        as="main"
        maxW="container.xl"
        display="flex"
        flexDirection="column"
      >
        <Heading
          as="h3"
          size="md"
          marginBottom="3"
          fontSize={["1.5rem", "2rem"]}
          mt="8"
          alignItems="left"
        >
          let's generate:
        </Heading>

        <Flex
          marginTop="3"
          marginBottom="14"
          alignItems="center"
          justifyContent="center"
        >
          <ParametersForm />
        </Flex>

        <Flex justify="center" gap="4" flexWrap="wrap" flexDirection="row">
          <JokeCard joke={jokeText} />
          <JokeCard joke={jokeText} />
          <JokeCard joke={jokeText} />
          <JokeCard joke={jokeText} />
          <JokeCard joke={jokeText} />
          <JokeCard joke={jokeText} />
          <JokeCard joke={jokeText} />
          <JokeCard joke={jokeText} />
          <JokeCard joke={jokeText} />
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
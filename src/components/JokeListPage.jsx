import {useState, useCallback, useEffect} from "react";
import {Container, Flex, Heading, Button, Center} from "@chakra-ui/react";
import {api} from "../api";
import {JokeCard} from "./JokeCard";
import {ParametersForm} from "./ParametersForm";

export function JokeListPage() {
  const [joke, setJoke] = useState("");
  const [numberOfJokes, setNumberOfJokes] = useState("");
  const [jokeCategory, setJokeCategory] = useState("");

  const handleSetJoke = useCallback((value) => {
    setJoke(value);
  }, []);

  const getJoke = () => {
    if (jokeCategory) {
      api
        .get(`/random?category=${jokeCategory}`)
        .then(response => handleSetJoke(response.data.value));
    } else {
      api
        .get("/random")
        .then((response) => handleSetJoke(response.data.value))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <Container
        maxW="container.xl"
        display="flex"
        flexDirection="column"
        marginY="2rem"
        centerContent="true"
      >
        <Heading
          as="h3"
          size="md"
          fontSize={["1.5rem", "2rem"]}
          position="center"
        >
          let's generate:
        </Heading>

        <ParametersForm
          onGenerate={getJoke}
          setNumberOfJokes={setNumberOfJokes}
          numberOfJokes={numberOfJokes}
          jokeCategory={jokeCategory}
          setJokeCategory={setJokeCategory}
        />
      </Container>

      <Container marginY="2.5rem">
        <Flex justify="center" gap="2rem" flexWrap="wrap" flexDirection="row">
          <JokeCard joke={joke} jokeCategory={jokeCategory}/>
        </Flex>
      </Container>

      <Center>
        <Button
          boxShadow="1px 4px 4px 1px green"
          bg="white"
          color="green"
          position="center"
          height="3rem"
          fontSize="1.5rem"
          _hover={{
            bg: "green",
            color: "white",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          go back up
        </Button>
      </Center>
    </>
  );
}

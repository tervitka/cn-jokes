import { useState, useEffect } from "react";
import {
  Button,
  Box,
  Grid,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text
} from "@chakra-ui/react";
import { api } from "../api";

export function ParametersForm({ onGenerate, setNumberOfJokes, numberOfJokes, jokeCategory, setJokeCategory }) {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    api
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Grid
      as="form"
      width={["100%", "75%"]}
      display="flex"
      flexDirection={["column", "row"]}
      marginTop="2rem"
    >
      <FormControl position="relative">
        <FormLabel>
          <NumberInput max="100" min="1" borderColor="white" disabled>
            <NumberInputField
              id="amount"
              boxShadow="1px 1px 0px 2px orange"
              height="3rem"
              borderRadius="0.7rem"
              placeholder="number of jokes"
              value={numberOfJokes}
              onInput={e => setNumberOfJokes(e.target.value)}
            />
            <NumberInputStepper>
              <NumberIncrementStepper border="none" />
              <NumberDecrementStepper border="none" />
            </NumberInputStepper>
          </NumberInput>
        </FormLabel>

        <Box
          backgroundColor="orange.400"
          boxShadow="2px 2px 3px"
          bottom={[".15rem", ".5rem"]}
          padding=".25rem"
          position="absolute"
          right="50px"
          transform="matrix(1, -0.04, 0.03, 1, 0, 0)"
        >
          <Text>
            Coming Soon
          </Text>
        </Box>
      </FormControl>



      <FormControl>
        <FormLabel>
          <Select
            borderColor="white"
            boxShadow="1px 1px 0px 2px orange"
            height="3rem"
            borderRadius="0.7rem"
            placeholder="choose joke category"
            value={jokeCategory}
            onChange={e => setJokeCategory(e.target.value)}
          >
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </Select>
        </FormLabel>
      </FormControl>

      <FormControl width="auto">
        <FormLabel>
          <Button
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            bg="green"
            color="white"
            height="3rem"
            fontSize="1.5rem"
            onClick={onGenerate}
            _hover={{ bg: "orange" }}
            width={['100%', 'auto']}
          >
            generate
          </Button>
        </FormLabel>
      </FormControl>
    </Grid>
  );
}

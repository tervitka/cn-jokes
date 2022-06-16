
import { useState, useEffect } from "react";
import { api } from "../api";
import { Button, Center, FormControl, FormLabel, Select,
  NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

export function ParametersForm({ handleSetJoke }) {

  const [categories, setCategories] = useState([])

  const getJoke = () => {
    api.get("/random")
    .then(response => handleSetJoke(response.data.value))
    .catch(error => console.log(error))
  }

  const getCategories = () => {
    api.get("/categories")
    .then(response => setCategories(response.data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getJoke()
    getCategories()
  }, [])

  return (
    <Center
      as="form"
      w={["100%", "75%"]}
      display="flex"
      flexDirection={["column", "row"]}
      justifyContent="center"
    >
      <FormControl>
        <FormLabel>
          <NumberInput
            max="50"
            min="1"
            borderColor="white"
            width="100%"
            marginX="auto"
            marginY="2"
          >
            <NumberInputField
              id="amount"
              placeholder="number of jokes"
              boxShadow="1px 1px 0px 2px orange"
              height="45px"
              borderRadius="10"
            />
            <NumberInputStepper>
              <NumberIncrementStepper border="none" />
              <NumberDecrementStepper border="none" />
            </NumberInputStepper>
          </NumberInput>
        </FormLabel>
      </FormControl>

      <FormControl>
        <FormLabel>
          <Select
            borderColor="white"
            boxShadow="1px 1px 0px 2px orange"
            placeholder="choose joke category"
            height="45px"
            width="100%"
            borderRadius="10"
            marginX="auto"
            marginY="2"
          >
            {
              categories.map (category => {
                return <option key={category} value={category}>{category}</option>
              })
            }
          </Select>
        </FormLabel>
      </FormControl>

      <FormControl>
        <FormLabel>
          <Button
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="10"
            bg="green"
            color="white"
            width="50%"
            height="45px"
            fontFamily="Londrina Solid, cursive"
            fontWeight="light"
            fontSize="1.5rem"
            marginX="auto"
            marginY="2"
            onClick={getJoke}
          >
            generate
          </Button>
        </FormLabel>
      </FormControl>
    </Center>
  );
}
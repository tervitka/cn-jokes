
import { useState, useEffect } from "react";
import { api } from "../api";
import { Button, Grid, FormControl, FormLabel, Select,
  NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

export function ParametersForm( { getJoke }) {

  const [categories, setCategories] = useState([])

  const getCategories = () => {
    api.get("/categories")
    .then(response => setCategories(response.data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Grid
      width={["100%", "75%"]}
      display="flex"
      flexDirection={["column", "row"]}
      marginTop={3}
    >
      <FormControl>
        <FormLabel>
          <NumberInput
            max="100"
            min="1"
            borderColor="white"
          >
            <NumberInputField
              id="amount"
              boxShadow="1px 1px 0px 2px orange"
              height="3rem"
              borderRadius={12}
              placeholder="number of jokes"
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
            height="3rem"
            borderRadius={12}
            placeholder="choose joke category"
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
            bg="green"
            color="white"
            height="3rem"
            fontSize="1.5rem"
            onClick={getJoke}
            _hover={{ bg: "orange" }}
          >
            generate
          </Button>
        </FormLabel>
      </FormControl>
    </Grid>
  )
}
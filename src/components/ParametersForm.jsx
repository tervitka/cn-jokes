import {
  Button,
  Center,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";

export function ParametersForm() {
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
            width={["100%", "75%"]}
            marginLeft="auto"
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
            borderRadius="10"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
            type="submit"
            w={["100%", "50%"]}
            height="45px"
            fontFamily="Londrina Solid, cursive"
            fontWeight="light"
            fontSize="1.5rem"
          >
            generate
          </Button>
        </FormLabel>
      </FormControl>
    </Center>
  );
}

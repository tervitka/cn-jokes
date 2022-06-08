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
  Select
} from '@chakra-ui/react';


export default function ParametersForm() {
  return (
    <Center as='form' w={['100%', '75%']} flexDirection={['column', 'row']}>
      <FormControl>
        <FormLabel>
          <NumberInput 
            max={50} 
            min={1} 
            borderColor='orange.100'
            w={['100%','75%']}
            ml='auto'
          >
            <NumberInputField 
              id='amount' 
              placeholder="number of jokes" 
              boxShadow='2px 2px 3px orange'
            />
            <NumberInputStepper>
              <NumberIncrementStepper border='none' />
              <NumberDecrementStepper border='none' />
            </NumberInputStepper>
          </NumberInput>
        </FormLabel>
      </FormControl>
        
      <FormControl>
        <FormLabel>
          <Select
            borderColor='orange.100'
            boxShadow='2px 2px 3px orange'
            placeholder='choose joke category'
          >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </FormLabel>
      </FormControl>
      
      <FormControl>
        <FormLabel>
          <Button
            boxShadow='2px 2px 3px rgba(0, 0, 0, 15)'
            colorScheme='whatsapp'
            type='submit'
            w={['100%', '50%']}
          >
            generate
          </Button>
        </FormLabel>
      </FormControl>
    </Center>
  )
}
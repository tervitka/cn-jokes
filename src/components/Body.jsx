import { 
  Center,
  Container,
  Flex, 
  Heading, 
} from '@chakra-ui/react';
import JokesCard from './JokesCard';
import ParametersForm from './ParametersForm';

export default function Body() {
  return (
    <>
      <Container maxW='container.xl'>
        <Heading 
          as='h4' 
          size='md' 
          mb={3}
        >
          let's generate:
        </Heading>

        <Flex
          mt={3} 
          mb={14} 
          alignItems='center' 
          justifyContent='center'
        >
          <Center as='form' w={['100%', '75%']} flexDirection={['column', 'row']}>
            <ParametersForm />
          </Center>
        </Flex>

        <Flex justify='center' gap={3} flexWrap='wrap' flexDirection='row'>
          <JokesCard />
        </Flex>
      </Container>
    </>
  )
}
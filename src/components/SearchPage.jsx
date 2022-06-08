import { 
  Container,
  Flex, 
  Heading, 
} from '@chakra-ui/react';
import JokesCard from './JokesCard';
import ParametersForm from './ParametersForm';

const jokeText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dapibus augue non sapien. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.';

export default function SearchPage() {
  return (
    <Container as='main' maxW='container.xl'>
      <Heading 
        as='h1' 
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
        <ParametersForm />
      </Flex>

      <Flex 
        justify='center' 
        gap={3} 
        flexWrap='wrap' 
        flexDirection='row'
      >
        <JokesCard joke={jokeText}/>
      </Flex>
    </Container>
  )
}
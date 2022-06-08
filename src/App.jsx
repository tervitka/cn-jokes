import { api } from './api';
import { Heading, SimpleGrid } from '@chakra-ui/react';

function App() {

  api.get('/random').then(response => console.log(response.data.value));

  return (
    <SimpleGrid>
      <Heading>
        Ahoj
      </Heading>
    </SimpleGrid>
  );
}

export default App;

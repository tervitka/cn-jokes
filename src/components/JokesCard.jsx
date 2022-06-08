import { 
  Box
} from "@chakra-ui/react";
import { IconContext } from 'react-icons';
import { FaQuoteLeft } from 'react-icons/fa';

export default function JokesCard({ joke }) {
  return(
    <Box 
      bg='gray.100'
      borderRadius={5}
      fontSize={20}
      maxW='sm'    
      p={8}
      pl={14}
      position='relative'
      textAlign='justify'
    >
      <IconContext.Provider
        value={{ color: 'white', size: '30px' }}
      >
        <Box 
          position='absolute' 
          left={3} 
          top={4} 
          as='icon'
        >
          <FaQuoteLeft />
        </Box>
      </IconContext.Provider>
      {joke}
    </Box>        
  )
}
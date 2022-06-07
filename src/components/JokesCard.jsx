import { 
  Box
} from "@chakra-ui/react";

export default function JokesCard() {
  return(
    <Box 
      as="strong" 
      maxW='sm'    
      bg='gray.100'
      borderRadius={5}
      p={8}
      pl={16}
    >
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Etiam bibendum elit eget erat. 
      Vivamus ac leo pretium faucibus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </Box>        
  )
}
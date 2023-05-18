import { Flex, IconButton, Text, Spacer } from '@chakra-ui/react';
import { ArrowBackIcon, EditIcon } from '@chakra-ui/icons';

const Header = () => {
  return <header>
    <Flex align="center" py={4} px={2} >
      <IconButton
        icon={<ArrowBackIcon boxSize={5} />}
        aria-label="Go Back"
        variant="solid"
        color={"black"}
        
        background={'transparent'}
      />
      <Text fontSize="xl" fontWeight="bold" mx={2}>
        Trip 1
      </Text>
      <Spacer />
      <IconButton
        icon={<EditIcon boxSize={5} />}
        aria-label="Edit"
        variant="solid"
        color={"black"}
        
        background={'transparent'}
      />
    </Flex>
  </header>
};

export default Header;

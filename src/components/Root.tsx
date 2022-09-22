import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { FaAirbnb } from 'react-icons/fa';
export default function Root() {
  return (
    <Box fontFamily={'Ayuthaya'}>
      <HStack
        py={5}
        px={'24'}
        borderBottomWidth={1}
        justifyContent={'space-between'}
      >
        <HStack>
          <Box color={'red.500'} alignItems={'center'}>
            <FaAirbnb size={38} />
          </Box>
          <Text color={'red.500'}>Cneebnb</Text>
        </HStack>
        <HStack>
          <Button>Log in</Button>
          <Button>Sign up</Button>
        </HStack>
      </HStack>
      <Outlet />
    </Box>
  );
}

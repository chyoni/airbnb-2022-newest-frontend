import { Box, IconButton, HStack, Text, Button } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { FaAirbnb, FaBars, FaUserCircle } from 'react-icons/fa';
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
          <Box color={'red.400'} alignItems={'center'}>
            <FaAirbnb size={38} />
          </Box>
          <Text color={'red.400'}>Cneebnb</Text>
        </HStack>
        <HStack>
          <Button variant={'ghost'} rounded={'full'}>
            <Text fontSize={'small'} color={'gray.700'}>
              Become a host
            </Text>
          </Button>
          <HStack
            rounded={'full'}
            borderWidth={1}
            padding={2}
            cursor={'pointer'}
            _hover={{ boxShadow: 'base' }}
          >
            <FaBars size={18} />
            <FaUserCircle size={30} />
            {/* // <IconButton
            //   aria-label="more"
            //   icon={ />}
            //   variant={'unstyled'}
            //   color={'gray.700'}
            //   marginRight={'-2'}
            //   marginLeft={'4'}
            // />
            // <IconButton
            //   aria-label="profile"
            //   icon={}
            //   variant={'unstyled'}
            //   marginLeft={'-10'}
            //   color={'gray.600'}
            // /> */}
          </HStack>
        </HStack>
      </HStack>
      <Outlet />
    </Box>
  );
}

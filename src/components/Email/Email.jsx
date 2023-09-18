import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Options from './Options';

const Email = ({emails}) => {
  return (
    <>
        {<Options emails={emails}/>}
    </>
  )
}

export default Email

import { Button } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import fdr3 from "./Images/fdr3.png"


const LoginDone = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/form');
  };

  return (
    <>
        <Box
            minHeight="100vh"
            background='linear-gradient(to left, #ff5757, #8c52ff)'
            color="white"
            display="flex"
            flexDirection={{ base: 'column-reverse', md: 'row' }}
            alignItems="center" 
            justifyContent="center"
            padding={5}
            style={{border:"0px solid blue"}}
        >
        <Box flex={{ base: '1', md: '1' }} textAlign={{ base: 'center', md: 'left' }} p={{ base: '4', md: '10' }} style={{border:"0px solid blue"}}>
            <Text as="h1" fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} fontWeight="bold" marginBottom={{ base: '4', md: '8' }}>
                Your Dashboard
            </Text>
            <Text as="h5" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} marginBottom={{ base: '4', md: '8' }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt assumenda reiciendis voluptas rem unde fugiat repudiandae praesentium iusto beatae possimus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto vel amet laboriosam quisquam exercitationem consequuntur minima deserunt laudantium. Eos.
            </Text>
            {/* <Link to="/home"> */}
                <Button colorScheme="red" size="lg" onClick={handleNextClick}>Next</Button>
            {/* </Link> */}
        </Box>
        <Box flex={{ base: '1', md: '1' }} alignItems="center" justifyContent="center" textAlign="center" marginBottom={{ base: '8', md: '0' }} style={{border:"0px solid red"}}>
        <center>
            <img src={fdr3} width="90%" />
        </center>
        </Box>
        </Box>
    </>
  )
}

export default LoginDone
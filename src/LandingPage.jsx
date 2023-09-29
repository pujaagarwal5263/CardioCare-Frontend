import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import axios from 'axios';
import { Box, Text, Button } from '@chakra-ui/react';
import Heart from "./Images/heart.png";
import Heart2 from "./Images/heart2.png";
import Heart3 from "./Images/heart3.png";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [authURL, setAuthURL] = useState('');

    const Login = async () => {
        try {
            const response = await axios.post('http://localhost:8000/nylas/generate-auth-url');
            const authURLFromNylas = response.data;

            setAuthURL(authURLFromNylas);

            window.location.href = authURLFromNylas;
        } catch (error) {
            console.error('Error fetching auth URL:', error);
        }
    }

    return (
      <>
        <Box
            minHeight="100vh"
            background='linear-gradient(to right, #ff5757, #8c52ff)'
            color="white"
            display="flex"
            flexDirection={{ base: 'column', md: 'column' }}
            // alignItems="center"
            justifyContent="center"
            padding={5}
            style={{border:"0px solid blue"}}
        >
            <Box
              style={{border:"0px solid blue"}}
            >
              {/* <img src={Logo} alt="" /> */}
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRig-K3NJgt4Dbe4NYQWQx1XjfjzrnLnEPhV0fQTGUBIaKh4kTmalisU_YtnCC_9brFFlY&usqp=CAU' alt='logo' width='100px' height='100px' style={{mixBlendMode:"color-burn"}}/> 
            </Box>
            <Box
              //  minHeight="100vh"
               background='linear-gradient(to right, #ff5757, #8c52ff)'
               color="white"
               display="flex"
               flexDirection={{ base: 'column', md: 'row' }}
               alignItems="center"
               justifyContent="center"
               padding={5}
               style={{border:"0px solid blue"}}
            >
              <Box flex={{ base: '1', md: '1' }} textAlign={{ base: 'center', md: 'left' }} p={{ base: '4', md: '10' }} style={{border:"0px solid blue"}}>
                  <Text as="h1" fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} fontWeight="bold" marginBottom={{ base: '4', md: '8' }}>
                      Heart Disease
                  </Text>
                  <Text as="h5" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} marginBottom={{ base: '4', md: '8' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt assumenda reiciendis voluptas rem unde fugiat repudiandae praesentium iusto beatae possimus.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto vel amet laboriosam quisquam exercitationem consequuntur minima deserunt laudantium. Eos.
                  </Text>
                  {/* <Link to="/home"> */}
                      <Button colorScheme="purple" size="lg" onClick={Login}>Get Started</Button>
                  {/* </Link> */}
              </Box>
              <Box flex={{ base: '1', md: '1' }} alignItems="center" justifyContent="center" textAlign="center" marginBottom={{ base: '8', md: '0' }} style={{border:"0px solid red"}}>
                <center>
                  <img src={Heart2} alt="Heart Image" width="90%" />
                </center>
              </Box>
            </Box>
        </Box>
      </>
    )
}

export default LandingPage;

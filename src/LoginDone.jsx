import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import fdr3 from "./Images/fdr3.png"
import axios from 'axios';
import Header from "./Header";

const LoginDone = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [email,setUserEmail] = useState("");

  // const getUserDetails = async() =>{
  //   const userEmail = localStorage.getItem("userEmail");
  //   if (userEmail) {
  //     setUserEmail(userEmail);
  //   }
  //   const response = await axios.get(`https://cardiocare-backend.onrender.com/get_user_details/${email}`)
 
  //   if(response.status == 200){
  //       setUsername(response.data.name)
  //       localStorage.setItem("username",username)
  //   }
  // }

  // useEffect(()=>{
  //   getUserDetails();
  // },[]);

  const getUserDetails = async () => {
    try{
    // Check sessionStorage
    const userEmail = sessionStorage.getItem("userEmail");
    console.log("User Email from sessionStorage:", userEmail);
  
    if (userEmail) {
      // If user email is found, set it in the state
      setUserEmail(userEmail);
    }
  
    const response = await axios.get(`https://cardiocare-backend.onrender.com/get_user_details/${userEmail}`);
    console.log("GET Request Response:", response);
  
    if (response.status == 200) {
      setUsername(response.data.name);
      console.log("Username:", username);
      localStorage.setItem("username", username);
    }
    }catch(err){
      console.log(err);
    }

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getUserDetails();
    }, 500); // Delay for 2 seconds (2000 milliseconds)
  
    return () => {
      // Clear the timer if the component unmounts before the delay is reached
      clearTimeout(timer);
    };
  }, []);

  const handleNextClick = () => {
    navigate('/form');
  };

  return (
    <>
    <Header/>
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
            <Text as="h1" fontSize={{ base: '1xl', md: '2xl', lg: '4xl' }} fontWeight="bold" marginBottom={{ base: '4', md: '8' }}>
                Welcome to CardioCare, {username} !
            </Text>
            <Text as="h5" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} marginBottom={{ base: '4', md: '8' }}>
            We're thrilled to have you join us on your journey towards a healthier heart. At CardioCare, we're committed to making the process of predicting heart disease based on your medical reports hassle-free and reliable.
            <br/>
            Your heart health is our priority, and we understand the importance of accurate predictions and peace of mind. Our team of dedicated professionals and cutting-edge technology are here to support you every step of the way.
            </Text>
            {/* <Link to="/home"> */}
                <Button colorScheme="red" size="lg" onClick={handleNextClick}>Heartbeat Insight - Begin Now</Button>
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
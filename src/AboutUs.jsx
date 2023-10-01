import React from 'react';
import { Box, Center, Heading, Image, Link, Text, Button } from '@chakra-ui/react';
import img1 from './Images/puja.jpg';
import img2 from "./Images/sadanand.jpg"
import img3 from './Images/sandeep.jpg';
import img4 from './Images/kiran.jpg';
import { useNavigate } from 'react-router-dom'


// import img1 from './Images/dr2.jpg';
// import img2 from './Images/dr1.jpeg';
// import img3 from './Images/dr2.jpg';
// import img4 from './Images/dr2.jpg';


const TeamMember = ({ name, image }) => {
 

  return (
    <Center>

    <Box maxW="200px" overflow="hidden" textAlign="center" mb="3" m="8" >
      <Image src={image} alt={name} boxSize="200px" borderRadius="full" />
      <Heading size="md" mt="2">
        {name}
      </Heading>
    </Box>
    </Center>
  );
};

const AboutUs = () => {

 const navigate = useNavigate();
  
 const goToDashboard = () =>{
     navigate("/dashboard")
 }

  const teamMembers = [
    {
      name: 'Puja Agarwal',
      image: img1,
    },
    {
      name: 'Sadanand Jaiswal',
      image: img2,
    },
    {
      name: 'Sandeep Srivastava',
      image: img3,
    },
    {
      name: 'Kiran Kumar G',
      image: img4,
    },
  ];

  return (
    <div style={{background: 'linear-gradient(to left, #ff5757, #8c52ff)', minHeight: '100vh', padding: '2rem'}}>
      <div>
        <Heading size="3xl" textAlign="center" margin="2rem">About Us - Cardio Care Team</Heading>
        <Text color="white" fontSize="1.5rem"> 
          Welcome to Cardio Care, your trusted partner on the journey to better heart health. Our dedicated team of experts 
          is committed to providing you with the knowledge, support, and resources you need to lead a heart-healthy life.
        </Text>
      </div>
      <Box margin="0 auto" mt="5">
        <Heading size="lg">Our Team</Heading>
        <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
          {teamMembers.map((teamMember) => (
            <TeamMember key={teamMember.name} {...teamMember} />
            ))}
        </div>
      </Box>
      <Box margin="0 auto" mt="5">
        <Heading size="lg"> Visit Our Blog </Heading>
        <Text color="white" fontSize="1.5rem">
          In today's fast-paced world, health often takes a backseat to our daily routines. It's easy to overlook the 
          importance of regular health check-ups, especially when it comes to our heart. Cardiovascular diseases remain 
          one of the leading causes of mortality worldwide, highlighting the urgent need for accessible, efficient, and 
          accurate healthcare solutions. That's where "Cardio Care" steps in, offering a transformative approach to heart 
          health management.
        </Text>
        <Link href='https://freakycoders.hashnode.dev/cardiocare-your-heart-our-priority' color="blue" fontSize="1.5rem"> Visit our Blog to learn more </Link>
      </Box>
      <br/>
      <Button colorScheme='red' onClick={goToDashboard}>Back to Dashboard</Button>

    </div>
  );
}

export default AboutUs
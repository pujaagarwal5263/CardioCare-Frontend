import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, CircularProgress, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'

function DoctorFinder() {
  const [hospitals, setHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();
  const goToDashboard = () =>{
      navigate("/dashboard")
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      findNearbyHospitals(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);

  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
          setLoading(false); 
        }
      );
    } else {
      console.error('Geolocation is not available in this browser.');
      setLoading(false); 
    }
  };

  const findNearbyHospitals = async (latitude, longitude) => {
    const API_KEY = 'AIzaSyCRgAdyEX-uXCg6-vevbgowW6OSaIHRdtM';
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        // console.log(results);
        setHospitals(results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  };

  return (
    <Box p={4} background='linear-gradient(to left, #ff5757, #8c52ff)' color="white" minHeight="100vh">
      <Heading as="h2" size="xl" mb={4}>
        Nearby Hospitals
      </Heading>
      {isLoading ? (
        <Flex align="center" justify="center" height="200px">
          <CircularProgress isIndeterminate color="teal.500" />
        </Flex>
      ) : (
        <>
          {userLocation && (
            <Text>
              Current location successfully fetched!! {userLocation.latitude}, {userLocation.longitude}
            </Text>
          )}
          <Flex flexWrap="wrap" justifyContent="space-around" p={4}>
            {hospitals.map((hospital, index) => (
              <Box
                key={index}
                p={4}
                m={2}
                width={{ base: '100%', sm: 'calc(50% - 16px)', md: 'calc(32% - 16px)' }}
                borderRadius="md"
                pr={4}
                    pt={{base: 4, md: 0}}
                    pb={{base: 4, md: 0}}
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)', 
                      backdropFilter: 'blur(10px)', 
                      borderRadius: '10px', 
                      padding: '1rem', 
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', 
                      transition: "all 0.3s ease"
                    }}
                    _hover={{
                      // border:"1px solid red",
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Change the boxShadow on hover
                      cursor: "pointer",
                      transform: 'scale(1.01)'
                    }}
              >
                <Heading as="h3" size="lg" color="purple" mb={1.5}>
                  {hospital.name}
                </Heading>
                <Text>
                  {/* <b>Code:</b> {hospital.plus_code?.compound_code}
                  <br /> */}
                  <b>Rating:</b> {hospital.rating}
                  <br />
                  <b>Reviews:</b> {hospital.user_ratings_total}
                  <br />
                  <b>Vicinity:</b> {hospital.vicinity}
                </Text>
              </Box>
            ))}
          </Flex>
        </>
      )}
       <Button colorScheme='red' onClick={goToDashboard}>Back to Dashboard</Button>
    </Box>
  );
}

export default DoctorFinder;



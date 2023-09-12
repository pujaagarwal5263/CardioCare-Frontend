import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, CircularProgress } from '@chakra-ui/react';

function DoctorFinder() {
  const [hospitals, setHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setLoading] = useState(true);

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
        console.log(results);
        setHospitals(results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  };

  return (
    <Box p={4}>
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
          <Flex flexWrap="wrap">
            {hospitals.map((hospital, index) => (
              <Box
                key={index}
                p={4}
                m={2}
                width={{ base: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' }}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                bg="white"
              >
                <Heading as="h3" size="lg">
                  {hospital.name}
                </Heading>
                <Text>
                  Code: {hospital.plus_code?.compound_code}
                  <br />
                  Rating: {hospital.rating}
                  <br />
                  Reviews: {hospital.user_ratings_total}
                  <br />
                  Vicinity: {hospital.vicinity}
                </Text>
              </Box>
            ))}
          </Flex>
        </>
      )}
    </Box>
  );
}

export default DoctorFinder;
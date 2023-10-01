import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, CircularProgress, Button, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function DoctorFinder() {
  const [hospitals, setHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [originalLocation, setOriginalLocation] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const extension = "https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf";


  const navigate = useNavigate();
  const goToDashboard = () =>{
      navigate("/dashboard")
  }

  useEffect(() => {
    console.log(errorStatus);
  }, [errorStatus]);

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      findNearbyHospitals(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);


  const getLocation = async (latitude, longitude) => {
    const api = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;
    try {
      const response = await axios.get(api);
      if (response.data) {
        const { address } = response.data;
        const locationParts = [];
  
        if (address?.city) {
          locationParts.push(address.city);
        }
        if (address?.town) {
          locationParts.push(address.town);
        }
        if (address?.city_district) {
          locationParts.push(address.city_district);
        }
        if (address?.state_district) {
          locationParts.push(address.state_district);
        }
  
        if (address?.state) {
          locationParts.push(address.state);
        }
  
        const formattedLocation = locationParts.join(", ");
        setOriginalLocation(formattedLocation);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getLocation(latitude, longitude);
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
        setErrorStatus(true);
      });
  };

  return (
    <Box p={4} background='linear-gradient(to left, #ff5757, #8c52ff)' color="white" minHeight="100vh">
      <Heading as="h2" size="xl" mb={4}>
        Nearby Hospitals
      </Heading>
      {originalLocation && (
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Showing nearby hospitals for <b>{originalLocation}</b>
            </p>
          )}

{errorStatus && (
          <Flex align="center" justify="center" height="200px">
            <div className="dnm-status" style={{ textAlign: "center" }}>
              <p style={{ fontSize: "20px" }}>
                Please install{" "}
                <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf" target='_blank' style={{color:"blue", textDecoration:"underline"}}>
  this
</a>{" "}
                Chrome extension, to get nearby hospitals.
              </p>
              <br />
              <p>And turn it ON</p>
            </div>
          </Flex>
        )}

      {isLoading && !errorStatus ? (
        <Flex align="center" justify="center" height="200px">
          <CircularProgress isIndeterminate color="teal.500" />
        </Flex>
      ) : (
        <>
          {/* {userLocation && (
            <Text>
              Current location successfully fetched!! {userLocation.latitude}, {userLocation.longitude}
            </Text>
          )} */}
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



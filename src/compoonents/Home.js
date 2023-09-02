import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  HStack,
  Icon,
  Button,
  Divider,
  Link,
  Spacer,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GiStarSattelites } from "react-icons/gi";
import Smilesvg from "./my.svg";
import telephone from "./telephone.svg";
import human from "./56.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100vh"
        overflow="hidden"
      >
        <Box flex="1" height="100%" backgroundColor="#FFFFFF">
          <Box p={10}>
            <HStack spacing={12}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box display="flex" alignItems="center">
                  <Icon as={GiStarSattelites} h={6} w={6} color="blue" mr={1} />
                  <Text as="b" fontSize="2xl" color="blue">
                    CardioCare
                  </Text>
                </Box>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Text>About</Text>
              </Link>
              <Link to="/patients" style={{ textDecoration: "none" }}>
                <Text>Patients</Text>
              </Link>
              <Link to="/news" style={{ textDecoration: "none" }}>
                <Text>News</Text>
              </Link>
              <Link to="/product" style={{ textDecoration: "none" }}>
                <Text>Product</Text>
              </Link>
            </HStack>
          </Box>
          <Box p={10}>
            <Heading
              color="#6BA1EE"
              fontWeight="bold"
              fontSize={50}
              maxW="800px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="wrap"
            >
              Say 👏🏻 Goodye to Heart Problems, Experience the Joy of a Radient
              Smile 🌟
            </Heading>
          </Box>
          <Image
            src={Smilesvg}
            alt="My SVG"
            ml="-70px"
            transform="translateX(30px) rotate(5deg) scaleY(1.2)"
          />
        </Box>
        <Box
          flex="1"
          height="100%"
          backgroundColor="#F9F6ED"
          borderWidth={1}
          borderBottomLeftRadius={250}
        >
          <Box paddingLeft={40} paddingTop={8} paddingRight={5}>
            <HStack spacing={10}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Text>Careers</Text>
              </Link>
              <Link to="/patients" style={{ textDecoration: "none" }}>
                <Text>Affilations</Text>
              </Link>
              <Button
                size="lg"
                //colorScheme="teal"
                bg="#F9F6ED"
                color="#277DE6"
                variant="solid"
                _hover={{
                  bg: "#D3D3D3",
                }}
                onClick={() => console.log("login")}
                style={{
                  //   boxShadow: "0px 2px 3px white",
                  borderRadius: "123px",
                  borderColor: "#277DE6",
                  borderWidth: "2px",
                }}
              >
                Sign In
              </Button>
              <Button
                size="lg"
                //colorScheme="teal"
                bg="#277DE6"
                color="white"
                variant="solid"
                onClick={() => console.log("login")}
                _hover={{
                  bg: "#277DE6",
                }}
                style={{
                  //   boxShadow: "0px 2px 3px white",
                  borderRadius: "123px",
                  borderColor: "#277DE6",
                  borderWidth: "2px",
                }}
              >
                Get In Touch
              </Button>
            </HStack>
          </Box>
          <Box paddingLeft={170} paddingTop={50} paddingRight={5} mb={30}>
            <HStack>
              <Heading color="#6BA1EE" fontSize={16}>
                Our detal health services prioritize your oral <br /> well
                being. Trust our experience team to guide <br /> you on journey
                to optimal dental health.
              </Heading>
              <Image src={telephone} alt="My SVG" borderRadius="10px" />
            </HStack>
          </Box>
          <Box h="100%" ml={32}>
            <Image src={human} alt="My SVG" borderRadius="40px" />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Home;

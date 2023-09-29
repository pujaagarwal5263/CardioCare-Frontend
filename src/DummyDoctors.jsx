
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Flex,
  Button,
  Spacer,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { EmailIcon, CalendarIcon } from '@chakra-ui/icons';
import doctorsData from './doctors.json';

const DoctorList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();

  const handleScheduleAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    onOpen();
  };

  const handleAppointmentSubmit = () => {
    ScheduleAppointment(selectedDoctor);
    onClose();
  };

  const handleSendEmail = (doctor) => {
    navigate("/email", { state: { doctor } });
  };

  const ScheduleAppointment = (selectedDoctor) => {
    const doctorEmailParam = encodeURIComponent(selectedDoctor.email);
    navigate(`/calendar?doctorEmail=${doctorEmailParam}`);
  };

  return (
    <ChakraProvider>
      <Box p={4} background='linear-gradient(to left, #ff5757, #8c52ff)' color="white" minHeight="100vh">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          List of Doctors
        </Text>
        <UnorderedList listStyleType="none" p={0}>
          {doctorsData.map((doctor, index) => (
            <ListItem key={index} my={4} boxShadow="md" borderRadius="md">
              <Flex
                flexDir={{ base: 'column', md: 'row' }}
                alignItems="center"
                justifyContent="space-between"
                pr={4}
                pt={{base: 4, md: 0}}
                pb={{base: 4, md: 0}}
                style={{
                  background: 'rgba(255, 255, 255, 0.12)', 
                  backdropFilter: 'blur(10px)', 
                  borderRadius: '10px', 
                  padding: '1rem', 
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', 
                  transition: "background 0.3s"
                }}
              >
                <Flex
                  flexDir={{ base: 'column', md: 'row' }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    w={{ base: '40%', md: 150 }}
                    h={{ base: "40%", md: 150 }}
                    borderRadius="md"
                    mb={{ base: 4, md: 0 }}
                    // style={{ mixBlendMode: 'color-burn' }}
                  />
                  <Box ml={{ base: 0, md: 4 }}>
                    <Text fontSize="xl" fontWeight="bold">
                      {doctor.name}
                    </Text>
                    <Text>Email: {doctor.email}</Text>
                    <Text>Education: {doctor.education}</Text>
                    <Text>Years of Experience: {doctor.experience}</Text>
                  </Box>
                </Flex>
                <Flex alignItems="center" mt={{ base: 4, md: 0 }}>
                    <Button
                      leftIcon={<EmailIcon />}
                      colorScheme="yellow"
                      variant="solid"
                      mr={2}
                      onClick={() => handleSendEmail(doctor)}
                    >
                      Send Email
                    </Button>
                    <IconButton
                      aria-label="Schedule Appointment"
                      icon={<CalendarIcon />}
                      colorScheme="purple"
                      variant="solid"
                      onClick={() => handleScheduleAppointment(doctor)}
                    />
                </Flex>
              </Flex>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Schedule Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedDoctor && (
              <form>
                <p>Schedule appointment with {selectedDoctor.name}?</p>
                <div>
                  {/* Date and Time inputs */}
                </div>
              </form>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleAppointmentSubmit}>
              Schedule
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default DoctorList;

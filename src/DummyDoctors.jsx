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

  const ScheduleAppointment = (selectedDoctor) => {
    const doctorEmailParam = encodeURIComponent(selectedDoctor.email);
    navigate(`/calendar?doctorEmail=${doctorEmailParam}`);
  };
  return (
    <ChakraProvider>
      <Box p={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          List of Doctors
        </Text>
        <UnorderedList listStyleType="none" p={0}>
          {doctorsData.map((doctor, index) => (
            <ListItem key={index} my={4} boxShadow="md" borderRadius="md">
              <Flex alignItems="center">
                <Image src={doctor.image} alt={doctor.name} w={150} h={150} borderRadius="md" />
                <Box ml={4}>
                  <Text fontSize="xl" fontWeight="bold">{doctor.name}</Text>
                  <Text>Email: {doctor.email}</Text>
                  <Text>Education: {doctor.education}</Text>
                  <Text>Years of Experience: {doctor.experience}</Text>
                </Box>
                <Spacer />
                <Button
                  leftIcon={<EmailIcon />}
                  colorScheme="teal"
                  variant="solid"
                  mr={2}
                 // onClick={() => handleSendEmail(doctor)}
                >
                  Send Email
                </Button>
                <IconButton
                  aria-label="Schedule Appointment"
                  icon={<CalendarIcon />}
                  colorScheme="blue"
                  variant="solid"
                  onClick={() => handleScheduleAppointment(doctor)}
                />
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
            <Button colorScheme="blue" mr={3} onClick={handleAppointmentSubmit}>
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

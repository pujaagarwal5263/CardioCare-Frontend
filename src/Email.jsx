import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Email = () => {
  const location = useLocation();
  const { doctor } = location.state || {};

  const [sendTo, setSendTo] = useState(doctor ? doctor.email : '');
  const [subject, setSubject] = useState('Heart Disease Report Discussion');
  const [message, setMessage] = useState(`Hello ${doctor.name},`);
  const [report, setReport] = useState(null);


  const fetchReport = () => {
    const userEmail = sessionStorage.getItem("userEmail");
  
    fetch('http://localhost:8000/get_report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setReport(data);
        //setMessage(message + data)
      })
      .catch(error => {
        console.error('Error fetching report:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Email Page
      </Heading>
      {doctor && (
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor="sendTo">Send To:</FormLabel>
            <Input
              type="text"
              id="sendTo"
              name="sendTo"
              value={sendTo}
              onChange={(e) => setSendTo(e.target.value)}
              
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="subject">Subject:</FormLabel>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="message">Message:</FormLabel>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Send Email
          </Button>
          <Button onClick={fetchReport}> Fetch Report </Button>
        </form>
      )}
    </Box>
  );
};

export default Email;

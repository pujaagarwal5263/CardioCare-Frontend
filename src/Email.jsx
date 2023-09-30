import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isFectch, setIsFetch] = useState(false)
  const { doctor } = location.state || {};

  const [sendTo, setSendTo] = useState(doctor ? doctor.email : '');
  const [subject, setSubject] = useState('Heart Disease Report Discussion');
  const [message, setMessage] = useState(`Hello ${doctor.name},`);
  const [report, setReport] = useState(null);

  const toast = useToast({});

  const fetchReport = () => {
    setIsFetch(true)
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
        // setMessage(message)
        // const fullMessage = `${message}\n${Object.entries(data).map(([key, value]) => `${key}: ${value}`).join("\n")}`;
        // setMessage(fullMessage);
        const fullMessage = `${Object.keys(data.userReport)
          .map((key) => `${key}: ${data.userReport[key]}`)
          .join("\n")}`;

          setMessage(`Hello ${doctor.name}, Please Look At My Report: \n${fullMessage} \nThankYou`);


          console.log('message is')
          console.log(message);
      })
      .catch(error => {
        console.error('Error fetching report:', error);
      })
      .finally(() =>{
        setIsFetch(false)
      })
      
  };

  // const SendMail = () =>{
  //   setIsLoading(true);
  //   const userEmail = sessionStorage.getItem("userEmail");

  //   fetch("http://localhost:8000/send_email", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(
  //       { 
  //         subject: subject,
  //         recipient_array: [
  //           {
  //             name: doctor.name,
  //             email: doctor.email
  //           }
  //         ],
  //         body: message,
  //         sender_email: userEmail
  //       }),
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       //setMessage(message + data)
  //       toast({
  //         title: "Email sent",
  //         description: data.message,
  //         status: `${data.status?"success":"error"}`, // "info", "warning", "error", or "success"
  //         duration: 3000, // Duration in milliseconds
  //         isClosable: true, // Allow user to close the toast
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error Sending Mail:', error);
  //       toast({
  //         title: "Notification Title",
  //         description: "Error Sending Mail",
  //         status: "error", // "info", "warning", "error", or "success"
  //         duration: 3000, // Duration in milliseconds
  //         isClosable: true, // Allow user to close the toast
  //       });
  //     });
  //     setIsLoading(false)
  // }

  const SendMail = async () => {
    setIsLoading(true);
    const userEmail = sessionStorage.getItem("userEmail");
  
    try {
      console.log( { 
        subject: subject,
        recipient_array: [
          {
            name: doctor.name,
            email: doctor.email
          }
        ],
        body: message,
        sender_email: userEmail
      });
      const response = await fetch("http://localhost:8000/send_email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { 
            subject: subject,
            recipient_array: [
              {
                name: doctor.name,
                email: doctor.email
              }
            ],
            body: message,
            sender_email: userEmail
          }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      toast({
        title: "Email sent",
        description: data.message,
        status: "success", // "info", "warning", "error", or "success"
        duration: 3000, // Duration in milliseconds
        isClosable: true, // Allow user to close the toast
      });
    } catch (error) {
      console.error('Error Sending Mail:', error);
  
      toast({
        title: "Notification Title",
        description: "Error Sending Mail",
        status: "error", // "info", "warning", "error", or "success"
        duration: 3000, // Duration in milliseconds
        isClosable: true, // Allow user to close the toast
      });
    } finally {
      setIsLoading(false);
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <Box p={4} background='linear-gradient(to left, #ff0606d9, #8c52ff)' color="white" minHeight="100vh" >
      <Heading as="h2" mb={4}>
        Email Page
      </Heading>
      {doctor && (
        <Box p={4}>
          <center>
            <form onSubmit={handleSubmit}
              style={{background: 'rgba(255, 255, 255, 0.12)', 
              backdropFilter: 'blur(10px)',  
              borderRadius: '10px', 
              padding: '1rem', 
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', 
              maxWidth:"1200px"
            }}
            >
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
                  rows={8}
                />
              </FormControl>
              <Box display="flex" justifyContent="left" gap="10px">
                <Button type="submit" colorScheme="red" onClick={SendMail} isLoading={isLoading}>
                  Send Email
                </Button>
                <Button onClick={fetchReport} ml={2} isLoading={isFectch}> Fetch Report </Button>
                <Button onClick={()=>{
              navigate("/doctors")
            }}>Back</Button>
              </Box>
            </form>
          </center>
        </Box>
      )}
    </Box>
  );
};

export default Email;

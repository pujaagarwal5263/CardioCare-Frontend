import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ComposeMail = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipient:', recipient);
    console.log('Subject:', subject);
    console.log('Content:', content);

    // Clear the form fields after submission
    setRecipient('');
    setSubject('');
    setContent('');
  };

  return (
    <Box p="4" borderWidth="1px" borderRadius="md" maxW="900px" mx="auto" my="2rem" style={{width:"100%"}}>
      <Heading as="h2" size="lg" mb="4">
        Compose Email
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="recipient" mb="2">
          <FormLabel>Recipient:</FormLabel>
          <Input
            type="email"
            value={recipient}
            onChange={handleRecipientChange}
            required
          />
        </FormControl>
        <FormControl id="subject" mb="2">
          <FormLabel>Subject:</FormLabel>
          <Input
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            required
          />
        </FormControl>
        <FormControl id="content" mb="2">
          <FormLabel>Content:</FormLabel>
          <Textarea
            value={content}
            onChange={handleContentChange}
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">Send</Button>
      </form>
    </Box>
  );
};

export default ComposeMail;

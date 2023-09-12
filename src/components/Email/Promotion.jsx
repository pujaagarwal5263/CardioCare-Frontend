
import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import MailList from './MailList';

const sampleEmails = [
  {
    id: 1,
    subject: 'Welcome to Gmail',
    sender: 'gmail-noreply@gmail.com',
    date: '2023-09-15',
    content: 'Welcome to Gmail! This is a sample email.',
  }
];


const Promotion = () => {

    return (
        <MailList sampleEmails={sampleEmails} option={"Promotion"}/>
    )
  }
  
  export default Promotion
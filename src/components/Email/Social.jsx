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
  },
  {
    id: 2,
    subject: 'Meeting Reminder',
    sender: 'john.doe@example.com',
    date: '2023-09-14',
    content: 'Just a reminder about our meeting tomorrow.',
  }
];


const Social = () => {

    return (
        <MailList sampleEmails={sampleEmails} option={"Social"}/>
    )
  }
  
  export default Social
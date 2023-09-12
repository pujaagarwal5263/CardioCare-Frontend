import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';


const MailList = ({sampleEmails,option}) => {
    const [selectedEmail, setSelectedEmail] = useState(null);
    const handleEmailClick = (email) => {
      setSelectedEmail(email);
    };

    return (
        <Box className="email-list" borderWidth="1px" borderColor="gray.200" p="4" borderRadius="md">
        <Text as="h2" fontSize="xl" mb="4">
            {option}
        </Text>
        {sampleEmails.map((email) => (
            <Box
            key={email.id}
            className={`email-item ${selectedEmail === email ? 'selected' : ''}`}
            onClick={() => handleEmailClick(email)}
            style={{ cursor: 'pointer' }}
            borderBottomWidth="1px"
            borderColor="gray.200"
            py="2"
            display="flex" // Use a Flex layout
            justifyContent="space-between" // Align items horizontally
            >
            <Box 
                // flex="30%"
                flex={`min(max(20%, 100px), 20%)`} // Adjust the width here
                borderWidth="1px" // Border for the sender's box
                borderColor="gray.200"
                p="2"
            >
                <Text className="email-sender" fontWeight="bold">
                {email.sender}
                </Text>
                <Text className="email-date" color="gray.500" fontWeight="bold">
                {email.date}
                </Text>
            </Box>
            <Box 
                flex="80%" // Take up the remaining width
                borderWidth="1px" // Border for the second box
                borderColor="gray.200"
                fontWeight="600"
                p="2"
            >
                <Text className="email-subject">{email.subject}</Text>
                <Text className="email-date" color="gray.500">
                {email.content}
                </Text>
            </Box>
            </Box>
        ))}
        {selectedEmail && (
            <Box className="email-content" borderWidth="1px" borderColor="gray.200" p="4" mt="4" borderRadius="md">
            <Text as="h3" fontSize="xl" mb="2">
                {selectedEmail.subject}
            </Text>
            <Text>
                <strong>From:</strong> {selectedEmail.sender}
            </Text>
            <Text>
                <strong>Date:</strong> {selectedEmail.date}
            </Text>
            <Text mt="4">{selectedEmail.content}</Text>
            </Box>
        )}
        </Box>
    )
}


export default MailList;

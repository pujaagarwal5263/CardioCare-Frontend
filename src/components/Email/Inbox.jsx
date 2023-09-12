// import React, { useState } from 'react';

// const sampleEmails = [
//   {
//     id: 1,
//     subject: 'Welcome to Gmail',
//     sender: 'gmail-noreply@gmail.com',
//     date: '2023-09-15',
//     content: 'Welcome to Gmail! This is a sample email.',
//   },
//   {
//     id: 2,
//     subject: 'Meeting Reminder',
//     sender: 'john.doe@example.com',
//     date: '2023-09-14',
//     content: 'Just a reminder about our meeting tomorrow.',
//   },
//   // Add more sample emails as needed
// ];

// const Inbox = () => {
//   const [selectedEmail, setSelectedEmail] = useState(null);

//   const handleEmailClick = (email) => {
//     setSelectedEmail(email);
//   };

//   return (
//     <div className="email-list">
//       <h2>Inbox</h2>
//       <ul>
//         {sampleEmails.map((email) => (
//           <li
//             key={email.id}
//             className={selectedEmail === email ? 'selected' : ''}
//             onClick={() => handleEmailClick(email)}
//             style={{border:"1px solid"}}
//           >
//             <div className="email-sender">{email.sender}</div>
//             <div className="email-subject">{email.subject}</div>
//             <div className="email-date">{email.date}</div>
//           </li>
//         ))}
//       </ul>
//       {selectedEmail && (
//         <div className="email-content">
//           <h3>{selectedEmail.subject}</h3>
//           <p>From: {selectedEmail.sender}</p>
//           <p>Date: {selectedEmail.date}</p>
//           <p>{selectedEmail.content}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Inbox;


import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import MailList from './MailList';

const sampleEmails = [
  {
    id: 1,
    subject: 'This is Subject',
    sender: 'Sender@Mail.com',
    date: '2023-09-15',
    content: 'content (Welcome to Gmail! This is a sample email.)',
  },
  {
    id: 2,
    subject: 'Meeting Reminder',
    sender: 'john.doe@example.com',
    date: '2023-09-14',
    content: 'Just a reminder about our meeting tomorrow.',
  },
  {
    id: 3,
    subject: 'Welcome to Gmail',
    sender: 'gmail-noreply@gmail.com',
    date: '2023-09-15',
    content: 'Welcome to Gmail! This is a sample email.',
  },
  {
    id: 4,
    subject: 'Meeting Reminder',
    sender: 'john.doe@example.com',
    date: '2023-09-14',
    content: 'Just a reminder about our meeting tomorrow.',
  },
  // Add more sample emails as needed
];

const Inbox = () => {
  // const [selectedEmail, setSelectedEmail] = useState(null);

  // const handleEmailClick = (email) => {
  //   setSelectedEmail(email);
  // };

  return (
    <MailList sampleEmails={sampleEmails} option={"Inbox"}/>
  );
};

export default Inbox;

import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionButton, Box, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const qAndA = [
    {
      que: "what is the the questions?",
      ans:"The Questions are a collection of 100+ question and answers which will help you to understand about your favourite topics."
    },
    {
      que: "what is the the questions?",
      ans:"The Questions are a collection of 100+ question and answers which will help you to understand about your favourite topics."
    },
    {
      que: "what is the the questions?",
      ans:"The Questions are a collection of 100+ question and answers which will help you to understand about your favourite topics."
    },
    {
      que: "what is the the questions?",
      ans:"The Questions are a collection of 100+ question and answers which will help you to understand about your favourite topics."
    }
  ]

  return (
    <Accordion className='Accordion' allowToggle style={{ padding: 0, margin: 0, backgroundColor: 'red'  }}>
      {
        qAndA.map((faq,i)=>{
          return(
            <AccordionItem className='AccordionItem' style={{padding: 0, margin: 0, backgroundColor:"white"}} key={i}>
            <Box borderWidth="1px" bg="white" style={{ border:"1px solid blue" , paddingBottom:0, paddingTop:0}}>
              <AccordionButton
                className='AccordionButton flex justify-between'
                // ="blue.500"
                // _hover={{ bg: 'blue.600' }}
                // color="white"bg
              >
                {faq.que}
                {/* <AccordionIcon className="AccordionIcon" /> */}
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel className='AccordionPanel'>
              {faq.ans}
            </AccordionPanel>
          </AccordionItem>
          )
        })
      }
    </Accordion>
  );
};

export default FAQs;


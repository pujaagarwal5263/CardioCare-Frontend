import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import dr1 from "../Images/dr1.jpeg"
import dr2 from "../Images/dr2.jpg"
// import dr1 from "../../Images/dr1.jpeg"
// import dr2 from "../../Images/dr2.jpg"
// import dr3 from "../../Images/dr3.jpg"

const reviews = [
  {
    id: 1,
    image: dr2,
    name:"saddy maddy",
    rating: 4.5,
    text: 'Review 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: dr2,
    name:"saddy maddy",
    rating: 4.5,
    text: 'Review 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: dr2,
    name:"saddy maddy",
    rating: 4.5,
    text: 'Review 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 4,
    image: dr2,
    name:"saddy maddy",
    rating: 4.5,
    text: 'Review 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    id: 5,
    image: dr2,
    name:"saddy maddy",
    rating: 4.5,
    text: 'Review 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const ReviewCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, reviews.length - 3));
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + 3);

  return (
    <Flex alignItems="center" justifyContent="center" direction="row" style={{border:"1px solid red", width:"100%"}}>
      <Flex justifyContent="space-between" width="30%">
        <Button onClick={handlePrev} disabled={startIndex === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={startIndex === reviews.length - 3}>
          Next
        </Button>
      </Flex>
      <Box style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
        {visibleReviews.map((review) => (
          <Box key={review.id} p={4} border="1px solid #ccc" marginBottom={4} style={{border:"1px solid blue", width:"30%", transition:".5s"}}>
            <div className='flex flex-row'>
                <img src={review.image} alt="" style={{height:"100px", width:"100px"}}/>
                <div className="flex flex-col">
                    {/* <p className="font-bold py-0 border">{review.name}</p> */}
                    <p className="font-bold py-0 border">{review.rating}✨</p>
                </div>
            </div>
            <p>{review.text}</p>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default ReviewCarousel;

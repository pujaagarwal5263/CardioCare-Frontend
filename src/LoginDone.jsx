import { Button } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginDone = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/form');
  };

  return (
    <div>
      <h2>LoginDone</h2>
      <h5>Get your heart checkup!</h5>
      <Button onClick={handleNextClick}>Next</Button>  
    </div>
  )
}

export default LoginDone
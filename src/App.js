import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNylas } from '@nylas/nylas-react';
import NylasLogin from './NylasLogin';
import LoginDone from './LoginDone';
import LandingPage from "./LandingPage";
import HeartDiseaseForm from "./HeartDiseaseForm";
import DoctorFinder from "./DoctorFinder";
import { ChakraProvider, CheckboxGroup } from "@chakra-ui/react";
import DoctorList from "./DummyDoctors";
import Calendar from "./Calendar";
import Email from "./Email";
import EmailDashboard from "./EmailDashboard";
import Recommendation from "./Recommendation";
import AboutUs from "./AboutUs.jsx";


function App() {
  const nylas = useNylas();
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState({});
  const [toastNotification, setToastNotification] = useState('');
  const SERVER_URI = 'https://cardiocare-backend.onrender.com';

  useEffect(() => {
    if (!nylas) {
      return;
    }

    // Handle the code that is passed in the query params from Nylas after a successful login
    const params = new URLSearchParams(window.location.search);
    if (params.has('code')) {
      console.log(params);
      nylas
        .exchangeCodeFromUrlForToken()
        .then((user) => {
          console.log("user",user);
          const { id, emailAddress } = JSON.parse(user);
          setUserId(id);
          sessionStorage.setItem('userId', id);
          sessionStorage.setItem('userEmail',emailAddress);
          localStorage.setItem('userId', id);
          localStorage.setItem('userEmail',emailAddress);
        })
        .catch((error) => {
          console.error('An error occurred while parsing the response:', error);
        });
    }
  }, [nylas]);

  useEffect(() => {
    const userIdString = sessionStorage.getItem('userId');
    const userEmail = sessionStorage.getItem('userEmail');
    if (userIdString) {
      setUserId(userIdString);
    }
    if (userEmail) {
      setUserEmail(userEmail);
    }
  }, []);

  useEffect(() => {
    if (userId?.length) {
      window.history.replaceState({}, '', `/?userId=${userId}`);
      // getEmails();
    } else {
      window.history.replaceState({}, '', '/');
    }
  }, [userId]);


  // const getEmails = async () => {
  //   setIsLoading(true);
  //   try {
  //     const url = SERVER_URI + '/read_email';
  //     const res = await fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: userId,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({email:userEmail}),
  //     });
  //     const data = await res.json();
  //     console.log('mails are here')
  //     console.log(data);
  //     if (Array.isArray(data)) {
  //       setEmails(data);
  //     } else {
  //       setEmails([]);
  //     }
  //   } catch (e) {
  //     console.warn(`Error retrieving emails:`, e);
  //     return false;
  //   }
  //   setIsLoading(false);
  // };


  return (
    <>
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<LoginDone />} />
        <Route path="/login" element={<NylasLogin />} />
        <Route path="/form" element={<HeartDiseaseForm/>} />
        <Route path="/nearbydoctors" element={<DoctorFinder />} />
        <Route path="/doctors" element={<DoctorList/>} />
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/email" element={<Email/>} />
        <Route path="/email/dashboard" element={<EmailDashboard/>}/>
        <Route path="/Recommendation" element={<Recommendation/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>

        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
      </>
  );
}

export default App;
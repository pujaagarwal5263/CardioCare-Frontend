import React, { useState, useEffect } from "react";
import { useNylas } from "@nylas/nylas-react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../src/compoonents/Home";
import NylasLogin from "../src/compoonents/NylasLogin";
import LoginDone from "../src/compoonents/LoginDone";
import Data from "../src/compoonents/Data";
import Google from "./compoonents/Google";

function App() {
  const nylas = useNylas();
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState([]);
  const [toastNotification, setToastNotification] = useState("");
  const SERVER_URI = "http://localhost:8000";

  useEffect(() => {
    if (!nylas) {
      return;
    }

    // Handle the code that is passed in the query params from Nylas after a successful login
    const params = new URLSearchParams(window.location.search);
    if (params.has("code")) {
      console.log(params);
      nylas
        .exchangeCodeFromUrlForToken()
        .then((user) => {
          console.log("user", user);
          const { id } = JSON.parse(user);
          setUserId(id);
          sessionStorage.setItem("userId", id);
        })
        .catch((error) => {
          console.error("An error occurred parsing the response:", error);
        });
    }
  }, [nylas]);

  useEffect(() => {
    const userIdString = sessionStorage.getItem("userId");
    const userEmail = sessionStorage.getItem("userEmail");
    if (userIdString) {
      setUserId(userIdString);
    }
    if (userEmail) {
      setUserEmail(userEmail);
    }
  }, []);

  useEffect(() => {
    if (userId?.length) {
      window.history.replaceState({}, "", `/?userId=${userId}`);
      getEmails();
    } else {
      window.history.replaceState({}, "", "/");
    }
  }, [userId]);

  const getEmails = async () => {
    setIsLoading(true);
    try {
      const url = SERVER_URI + "/nylas/read-emails";
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: userId,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (Array.isArray(data)) {
        setEmails(data);
      } else {
        setEmails([]);
      }
    } catch (e) {
      console.warn(`Error retrieving emails:`, e);
      return false;
    }
    setIsLoading(false);
  };

  const disconnectUser = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userEmail");
    setUserId("");
    setUserEmail("");
  };

  const refresh = () => {
    getEmails();
  };
  return (
    // <Layout
    //     //   showMenu={!!userId}
    //     //   disconnectUser={disconnectUser}
    //     //   refresh={refresh}
    //     //   isLoading={isLoading}
    //     //   title="Email sample app"
    //     //   toastNotification={toastNotification}
    //     //   setToastNotification={setToastNotification}
    //     // >
    //     //   {!userId ? (
    //     //     <NylasLogin email={userEmail} setEmail={setUserEmail} />
    //     //   ) : (
    //     //     <div className="app-card">
    //     //       {/* <EmailApp
    //     //         userEmail={userEmail}
    //     //         emails={emails}
    //     //         isLoading={isLoading}
    //     //         serverBaseUrl={SERVER_URI}
    //     //         userId={userId}
    //     //         reloadEmail={refresh}
    //     //         setToastNotification={setToastNotification}
    //     //       /> */}
    //     //     </div>
    //     //   )}
    //     // </Layout>
    <ChakraProvider>
      <Routes>
        {/* <Route path="/" element={<LoginDone />} />
        <Route path="/login" element={<NylasLogin />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/api" element={<Google />} />

        <Route />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

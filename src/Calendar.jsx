// Calendar.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Calendar.css"; // Import your CSS file for Calendar styling
import axios from "axios";
import { useToast } from '@chakra-ui/react';
import { Button } from "@chakra-ui/react";

const Calendar = () => {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description,setDescription] = useState("");
  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const doctorEmail = queryParams.get("doctorEmail");

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

  const getUnixTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
  };
  
  const applyTimezone = (date) => {
    const localizedDate = new Date(date);
  
    return getUnixTimestamp(localizedDate);
  };

  const handleSubmit = async(e) => {
    setIsLoading(true)
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server or perform some action
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    console.log("Doctor Email:", doctorEmail);
    console.log("object",sessionStorage.getItem("userEmail"));
    // You can send the form data to the server or perform any necessary action here
    try {
      const response = await axios.post("http://localhost:8000/nylas/create-events", {
        email: sessionStorage.getItem("userEmail"),
        startTime: applyTimezone(startTime),
        endTime: applyTimezone(endTime),
        participants: `${doctorEmail}, ${userEmail}`, // Use an array if it's supposed to be an array
        description: description
      });
  
      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      // Parse the response as JSON (if it's JSON)
      const data = response.data;
      console.log(data);
      toast({
        title: "Success",
        description: "Appointment Scheduled Successfully",
        status: "success", // "info", "warning", "error", or "success"
        duration: 3000, // Duration in milliseconds
        isClosable: true, // Allow user to close the toast
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Could not schedule appointment",
        status: "error", // "info", "warning", "error", or "success"
        duration: 3000, // Duration in milliseconds
        isClosable: true, // Allow user to close the toast
      });
      console.error("Error:", err);
    }finally{
      setIsLoading(false)
    }
  };

  const getUsersEvents = async () => {
    try {
      setIsLoading(true);
      console.log("hittt");

      const response = await fetch(
        `http://localhost:8000/get_availability?doctorEmail=${doctorEmail}`,
        {
          method: "GET", // Use GET method, even though it's not standard
          headers: {
            "Content-Type": "application/json",
            // Add any other headers you may need
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Parse the response as JSON
      const data = await response.json();

      // Handle the response data here (e.g., display it or process it)
      console.log("Availability Data:", data);
      setEvents(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading to false when fetch is complete
    }
  };

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  const getHrsAndMin = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`
  }

  return (
    <div className="mainContainer">
      <div className="calendar-container">
        <div className="sidebar">
          {events!=null ? events.length > 0 ? (
            <ul>
              <b>Appointment For next Seven Days</b>
              {events.map((event, index) => (
                <li key={index}>
                  {event.title} on {convertTimestamp(event?.when.start_time)} to {getHrsAndMin(event?.when.end_time)}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events available for the next 7 days</p>
          ): <big><p>Fetch doctors schedule</p></big>}
          <button className="check-availability-button" onClick={getUsersEvents}>
            {isLoading ? "Loading..." : "Check Doctor's Availability"}
          </button>
        </div>
        <div className="form-container">
          <h2>Calendar</h2>
          <form onSubmit={handleSubmit} className="calendar-form">
            <div className="form-group">
              <label htmlFor="startTime">Start Time:</label>
              <input
                type="datetime-local"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endTime">End Time:</label>
              <input
                type="datetime-local"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="participants">Participants:</label>
              <input
                type="text"
                id="participants"
                value={`${doctorEmail},${userEmail}`}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Meeting Link:</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                required
              />
            </div>
            <Button type="submit" isLoading={isLoading}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

// Calendar.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Calendar.css"; // Import your CSS file for Calendar styling

const Calendar = () => {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [events, setEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server or perform some action
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    console.log("Doctor Email:", doctorEmail);
    // You can send the form data to the server or perform any necessary action here
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

  return (
    <div className="calendar-container">
      <div className="sidebar">
        {events!=null ? events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                {event.title} on {event?.when.date}
              </li>
            ))}
          </ul>
        ) : (
          <p>No events available for the next 7 days</p>
        ): <p>Fetch doctors schedule</p>}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Calendar;
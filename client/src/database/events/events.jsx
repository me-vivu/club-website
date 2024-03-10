import React, { useState } from 'react';
import axios from 'axios';
import "./add-event.css"

const AddEventForm = () => {
  const [eventData, setEventData] = useState({
    eventID: '',
    eventName: '',
    description: '',
    date: '',
    location: '',
    maxAttendees: '',
    displayImage: '',
    imageList: []
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/events', eventData);
      console.log('Event added successfully:', response.data);
      setErrorMessage('');
      // Optionally, you can reset the form here
      setEventData({
        eventID: '',
        eventName: '',
        description: '',
        date: '',
        location: '',
        maxAttendees: '',
        displayImage: '',
        imageList: []
      });
    } catch (error) {
      console.error('Error adding event:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while adding the event.');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add Event</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event ID:</label>
          <input
            type="text"
            name="eventID"
            value={eventData.eventID}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Max Attendees:</label>
          <input
            type="number"
            name="maxAttendees"
            value={eventData.maxAttendees}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Display Image:</label>
          <input
            type="text"
            name="displayImage"
            value={eventData.displayImage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image List:</label>
          <input
            type="text"
            name="imageList"
            value={eventData.imageList}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;

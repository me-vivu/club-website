import React, { useState } from 'react';
import axios from 'axios';
import uploadFileToGoogleDrive from '../../uploader';
import './add-event.css'; // Import the CSS file

const AddEventForm = () => {
  const [formData, setFormData] = useState({
    eventID: '',
    eventName: '',
    eventImage: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxAttendees: '',
    formLink: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    try {
      const imageUrl = await uploadFileToGoogleDrive(file);
      setFormData({
        ...formData,
        eventImage: imageUrl
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/addEvents', formData);
      // Reset form after successful submission
      setFormData({
        eventID: '',
        eventName: '',
        eventImage: '',
        description: '',
        date: '',
        time: '',
        location: '',
        maxAttendees: '',
        formLink: ''
      });
      
      setErrorMessage('');
      alert('Event added successfully!');

    } catch (error) {
      console.error('Error adding event:', error);
      setErrorMessage('Failed to add event. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Events</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event ID:
          <input type="text" name="eventID" value={formData.eventID} onChange={handleChange} required />
        </label>
        <label>
          Event Name:
          <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
        </label>
        
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <label>
          Max Attendees:
          <input type="number" name="maxAttendees" value={formData.maxAttendees} onChange={handleChange} />
        </label>
        <label>
          Form Link:
          <input type="text" name="formLink" value={formData.formLink} onChange={handleChange} />
        </label>
        <div>
          <label>Image:</label>
          <input type="file" name="file" onChange={handleFileChange} />
        </div>
        <br></br>
        <button type="submit">Add Event</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default AddEventForm;

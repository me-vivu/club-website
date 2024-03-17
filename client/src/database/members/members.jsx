import React, { useState } from 'react';
import axios from 'axios';
import uploadFileToGoogleDrive from '../../uploader'; // Assuming the file containing the function is located in ../../drive

import "./add-members.css"

const AddMemberForm = () => {
  const [memberData, setMemberData] = useState({
    memberID: '',
    name: '',
    position: '',
    image: '',
    emailId: '',
    linkedIn: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData({
      ...memberData,
      [name]: value
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    try {
      const imageUrl = await uploadFileToGoogleDrive(file);
      setMemberData({
        ...memberData,
        image: imageUrl
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/members', memberData);
      console.log('Member added successfully:', response.data);
      setErrorMessage('');
      // Optionally, you can reset the form here
      setMemberData({
        memberID: '',
        name: '',
        position: '',
        image: '',
        emailId: '',
        linkedIn: ''
      });
    } catch (error) {
      console.error('Error adding member:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while adding the member.');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add Club Member</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Member ID:</label>
          <input
            type="text"
            name="memberID"
            value={memberData.memberID}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={memberData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <select
            name="position"
            value={memberData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select Position</option>
            <option value="Secretary">Secretary</option>
            <option value="Joint Secretary">Joint Secretary</option>
            <option value="Executive member">Executive member</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" name="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            name="emailId"
            value={memberData.emailId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedIn"
            value={memberData.linkedIn}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMemberForm;

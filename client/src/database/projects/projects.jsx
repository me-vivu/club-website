import React, { useState } from 'react';
import axios from 'axios';
import uploadFileToGoogleDrive from '../../uploader';
import "./add-projects.css"

const AddProjectForm = () => {
  const [projectData, setProjectData] = useState({
    projectID: '',
    projectName: '',
    imgSrc: '',
    secondImg: '',
    description: '',
    status: 'Ongoing'
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value
    });
  };

  const handleFileChange = async (e) => {
    const {name} = e.target;
    const file = e.target.files[0];
    try {
      const imageUrl = await uploadFileToGoogleDrive(file);
      setProjectData({
        ...projectData,
        [name]: imageUrl
      });

      console.log("Image uploaded")
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/projects', projectData);
      console.log('Project added successfully:', response.data);
      setErrorMessage('');
      // Optionally, you can reset the form here
      setProjectData({
        projectID: '',
        projectName: '',
        imgSrc: '',
        secondImg: '',
        description: '',
        status: 'Ongoing'
      });
    } catch (error) {
      console.error('Error adding project:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while adding the project.');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add Project</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project ID:</label>
          <input
            type="text"
            name="projectID"
            value={projectData.projectID}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={projectData.projectName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Display Image:</label>
          <input type="file" name="imgSrc" onChange={handleFileChange} />
        </div>

        

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={projectData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={projectData.status}
            onChange={handleChange}
          >
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label>secondImage:</label>
          <input type="file" name="secondImg" onChange={handleFileChange} />
        </div>

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;

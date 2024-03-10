import React, { useState } from 'react';
import axios from 'axios';
import "./add-projects.css"

const AddProjectForm = () => {
  const [projectData, setProjectData] = useState({
    projectID: '',
    projectName: '',
    imgSrc: '',
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
          <label>Image Source:</label>
          <input
            type="text"
            name="imgSrc"
            value={projectData.imgSrc}
            onChange={handleChange}
          />
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
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;

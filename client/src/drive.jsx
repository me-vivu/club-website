import React, { useState } from "react";
import axios from "axios";

function GoogleDriveFileUploader() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [folder, setFolder] = useState("images");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folder);

    try {
      const response = await axios.post("http://localhost:3001/uploadData", formData);

      
      if (!response.data.fileId) {
        throw new Error("Failed to upload file");
      }

      setUrl("https://drive.google.com/file/d/" + response.data.fileId + "/view?usp=sharing");
      


    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleFileChange} />
      <button type="submit">Submit</button>
      {url && (
        <div>
          <p>File uploaded successfully!</p>
          <p>Public URL: {url}</p>
        </div>
      )}
    </form>
  );
}

export default GoogleDriveFileUploader;

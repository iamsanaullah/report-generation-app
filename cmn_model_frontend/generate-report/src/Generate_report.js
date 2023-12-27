// File: ImageUploadForm.jsx
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Generate_report.css';

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const responseContainerRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Enable the button when a file is selected
    setIsButtonDisabled(false);
  };

  const handleImageUpload = async () => {
    try {
      if (!image) {
        // Display a message if no file is selected
        setResponseMessage('Please choose a file first.');
        return;
      }

      setIsLoading(true); // Set loading state to true

      const formData = new FormData();
      formData.append('image', image);

      // Change the URL to your Node.js backend endpoint
      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Log the response data to the console
      console.log('Upload successful! Response:', response.data);

      // Update the state with the response message
      setResponseMessage(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
      // If you want to set an error message in the state, you can do it here.
    } finally {
      setIsLoading(false); // Set loading state to false after request completes
    }
  };

  return (
    <div className='app-container'>
      <h2>Image Upload</h2>
      <label htmlFor="fileInput">Choose File</label>
      <input
        type="file"
        id="fileInput"
        onChange={handleImageChange}
      />
      {image && <span className="file-name">Selected File: {image.name}</span>}
      
      {/* Message for selecting a file */}
      {!image && <p>Please choose a file first.</p>}

      <button
        onClick={handleImageUpload}
        disabled={isButtonDisabled || isLoading}
      >
        {isLoading ? 'Uploading...' : 'Upload Image'}
      </button>

      {/* Display the response message in a styled div */}
      {responseMessage !== null && (
        <div ref={responseContainerRef} className="response-container">
          <h3>Report</h3>
          <div className="response-message">{responseMessage}</div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;

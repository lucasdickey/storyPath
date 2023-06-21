// src/components/StoryDisplay.js
import React from 'react';
import './StoryDisplay.css';

const StoryDisplay = ({ story }) => {
  return (
    <div>
      {story ? (
        <div className="story">
          <h2>Your Custom Story:</h2>
          <p>{story}</p>
        </div>
      ) : (
        <p>Enter the details and click the button to generate your story!</p>
      )}
    </div>
  );
};

export default StoryDisplay;

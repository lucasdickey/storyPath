// src/components/StoryDisplay.js
import React from 'react';
import './StoryDisplay.css';

const StoryDisplay = ({ story }) => {
  return (
    <div>
      {story ? (
        <div className="story">
          <h2>${formData.childName}'s Story Path:</h2> 
          <p>{story}</p>
        </div>
      ) : (
        <p>Enter the details and click the button to generate your story!</p>
      )}
    </div>
  );
};

// TODO: Pass in childName dynamically into the <h2> tag above

// TODO: Take output story which is already in paragraphs, break into separate objects, and allow for inserting images from DALL-E sporadically between the paragraphs

export default StoryDisplay;

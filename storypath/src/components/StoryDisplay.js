// src/components/StoryDisplay.js
import React from 'react';

const StoryDisplay = ({ story }) => {
  return (
    <div>
      {story ? (
        <div>
          <h2>Generated Story</h2>
          <p>{story}</p>
        </div>
      ) : (
        <p>Please fill out the form to generate a story.</p>
      )}
    </div>
  );
};

export default StoryDisplay;

import './App.css';
import React, { useState } from 'react';
import Form from './components/InputForm';
import StoryDisplay from './components/StoryDisplay.js';

const App = () => {
  const [story, setStory] = useState('');

  const handleStoryGenerated = (generatedStory) => {
    setStory(generatedStory);
  };

  return (
    <div>
      <Form onStoryGenerated={handleStoryGenerated} />
      <StoryDisplay story={story} />
    </div>
  );
};

export default App;

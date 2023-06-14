// src/App.js
import React, { useState } from 'react';
import axios from 'axios';


const App = () => {
  const [formData, setFormData] = useState({
    childName: '',
    villain: '',
    location: '',
    childAge: '',
    authorVoice: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const openAiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
    const prompt = `Create a children's story with a hero named ${formData.childName}, a villain who is ${formData.villain}, set in ${formData.location}, suitable for a ${formData.childAge} year old, in the voice of ${formData.authorVoice}.`;

    const payload = {
      prompt,
      max_tokens: 1024,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
    };

    axios.post(openAiUrl, payload, { headers })
      .then(response => {
        onStoryGenerated(response.data.choices[0].text);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        alert("Error fetching story. Please try again.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="childName"
          placeholder="Child's Name"
          value={formData.childName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="villain"
          placeholder="Type of Villain"
          value={formData.villain}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="childAge"
          placeholder="Child's Age"
          value={formData.childAge}
          onChange={handleChange}
        />
        <select
          name="authorVoice"
          value={formData.authorVoice}
          onChange={handleChange}
        >
          <option value="">Select Author's Voice</option>
          <option value="roald_dahl">Roald Dahl</option>
          <option value="jk_rowling">J.K. Rowling</option>
          <option value="eb_white">E.B. White</option>
          <option value="dr_seuss">Dr. Seuss</option>
          <option value="cs_lewis">CS Lewis</option>
          <option value="beverly_clear">Beverly Cleary</option>
          <option value="mark_twain">Mark Twain</option>
          {/* Add other authors here */}
        </select>
        <button type="submit">Create your child's adventure</button>
      </form>
      {/* Story output will be displayed here */}
    </div>
  );
};

export default App;

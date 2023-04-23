import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const CohortForm = () => {
  const [full_name, setFull_name] = useState('');
  const [shortcode, setShortcode] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      full_name,
      shortcode,
    };
    console.log('Sending data:', data);
    fetch('http://127.0.0.1:8000/api/degree/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error)); //helped
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>New Degree</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="full-name-input"
          label="Full Name"
          type="text"
          value={full_name}
          onChange={(e) => setFull_name(e.target.value)}
         
        />
        <TextField
          id="short-code-input"
          label="Shortcode"
          type="text"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        
        />
      
          <Button type="submit" variant="contained">
            Create Degree
          </Button>
      </form>
    </div>
  );
};

export default CohortForm;
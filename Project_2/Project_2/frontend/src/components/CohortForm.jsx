import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

const CohortForm = () => {
  const [degrees, setDegrees] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState('');
  const [year, setYear] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/degree/')
      .then((response) => response.json())
      .then((data) => {
        setDegrees(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id,
      year,
      degree: selectedDegree,
    };
    console.log('Sending data:', data);
    fetch('http://127.0.0.1:8000/api/cohort/', {
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

  const handleDegreeChange = (e) => {
    setSelectedDegree(e.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>New Cohort</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="id-input"
          label="ID"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="year-input"
          label="Year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="degree-select"
          select
          label="Degree"
          value={selectedDegree}
          onChange={handleDegreeChange}
          helperText="Please select the degree for this cohort"
        >
          {degrees.map((degree) => (
            <MenuItem key={degree.shortcode} value={`http://127.0.0.1:8000/api/degree/${degree.shortcode}/`}  >
              {degree.shortcode}
            </MenuItem>
          ))}
        </TextField>
        
          <Button type="submit" variant="contained">
            Create Cohort
          </Button>
      </form>
    </div>
  );
};

export default CohortForm;
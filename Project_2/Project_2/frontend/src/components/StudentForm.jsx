import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

const CohortForm = () => {
  
  const [cohorts, setCohorts] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cohort/')
      .then((response) => response.json())
      .then((data) => {
        setCohorts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name,
      last_name,
      cohort: selectedCohort,
    };
    console.log('Sending data:', data);
    fetch('http://127.0.0.1:8000/api/student/', {
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

  const handleCohortChange = (e) => {
    setSelectedCohort(e.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>New Student</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="first-name-input"
          label="First name"
          type="text"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="last-name-input"
          label="Last name"
          type="text"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="cohort-select"
          select
          label="Cohort"
          value={selectedCohort}
          onChange={handleCohortChange}
        >
          {cohorts.map((cohort) => (
            <MenuItem key={cohort.name} value={`http://127.0.0.1:8000/api/cohort/${cohort.id}/`}    >
              {cohort.name}
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
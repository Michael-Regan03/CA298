




import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

const ModuleForm = () => {
  const [cohorts, setCohorts] = useState([]);
  const [selectedCohorts, setSelectedCohorts] = useState([]);
  const [code, setCode] = useState('');
  const [full_name, setFull_name] = useState('');
  const [ca_split, setCa_split] = useState('');


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
      code,
      full_name,
      delivered_to: selectedCohorts,
      ca_split
    };
    console.log('Sending data:', data);
    fetch('http://127.0.0.1:8000/api/module/', {
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
    setSelectedCohorts(e.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>New Cohort</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="code-input"
          label="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <TextField
          id="full_name-input"
          label="full_name"
          type="text"
          value={full_name}
          onChange={(e) => setFull_name(e.target.value)}
        />
        <TextField
          id="Ca_split-input"
          label="ca_split"
          type="number"
          value={ca_split}
          onChange={(e) => setCa_split(e.target.value)}
        />
        <TextField
          id="cohort-select"
          select
          label="cohort"
          value={selectedCohorts}
          onChange={handleCohortChange}
          helperText="Please select the cohop for this cohort"
          SelectProps={{ multiple: true }} //multiple cohorts
        >
          {cohorts.map((cohort) => (
            <MenuItem key={cohort.id} value={`http://127.0.0.1:8000/api/cohort/${cohort.id}/`}  >
              {cohort.id}
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

export default ModuleForm;
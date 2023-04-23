import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';



const GradeForm = () => {
  
  
    const location = useLocation();
    const student = new URLSearchParams(location.search).get("student") || "12345689";
    const cohort = new URLSearchParams(location.search).get("cohort") || "COMBUS1";

  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState('');
  const [ca_mark, setCa_mark] = useState(0);
  const [exam_mark, setExam_mark] = useState(0);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohort}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        console.log(cohort)
        setModules(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ca_mark,
      exam_mark,
      student:`http://127.0.0.1:8000/api/student/${student}/`,
      module: selectedModule,
      cohort:`http://127.0.0.1:8000/api/cohort/${cohort}/`
    };
    console.log('Sending data:', data);
    fetch('http://127.0.0.1:8000/api/grade/', {
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



  const handleModuleChange = (e) => {
    setSelectedModule(e.target.value);
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>New Grade</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="ca-mark-input"
          label="CA Mark"
          type="number"
          value={ca_mark}
          onChange={(e) => setCa_mark(parseInt(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="exam-mark-input"
          label="Exam Mark"
          type="number"
          value={exam_mark}
          onChange={(e) => setExam_mark(parseInt(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="module-select"
          select
          label="Module"
          value={selectedModule}
          onChange={handleModuleChange}
        >
          {modules.map((module) => (
            <MenuItem key={module.code} value={`http://127.0.0.1:8000/api/module/${module.code}/`}    >
              {module.full_name}
            </MenuItem>
          ))}
        </TextField>
        
    <Button variant="contained" color="primary" type="submit">
    Submit
    </Button>
    </form>
    </div>
    );
    };

export default GradeForm;
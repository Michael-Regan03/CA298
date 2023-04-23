import { useState, useEffect } from "react";
import { useLocation} from 'react-router-dom'
import { Link } from "react-router-dom"

import Trim  from './trim.js';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function ShowIndividualStudent() {
  
  
  const location = useLocation();
  const student = new URLSearchParams(location.search).get("student") || "COMSCI";
  const cohort = new URLSearchParams(location.search).get("cohort") || "COMSCI1";

  const [modules, setModules] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (students.length === 0) {
      fetch(`http://127.0.0.1:8000/api/student/${student}/`)
      .then((req) => req.json())
        .then((data) => {
          setStudents(data);
          setIsLoaded(true);
          console.log(cohort);
        })
        .catch((err) => console.log(err));
    }
  }, [student]);

  useEffect(() => {
    console.log(cohort);
  }, [cohort]);

  useEffect(() => {
    if (modules.length === 0) {
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohort} `)
        .then((req) => req.json())
        .then((data) => {
          setModules(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [student]);

  useEffect(() => {
    if (grades.length === 0) {        
      fetch(`http://127.0.0.1:8000/api/grade/?student=${student}`)
        .then((req) => req.json())
        .then((data) => {
          setGrades(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [students]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

    const DisplayGrades = () => {
      //if (!Array.isArray(facts)) {
      //  return null; // or some other fallback element
      //}
      return grades.map((elem) =>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <ul>
            <li>Module: { Trim(elem.module)}</li>
            <li>Ca Mark: {elem.ca_mark} </li>
            <li>Exam Mark: { elem.exam_mark } </li>
            <li>Total Grade: { elem.total_grade }</li>
            </ul>
          </Typography>
        
        );
    };


  return <div>
    <div>
       <h1>{students.first_name} { students.last_name }</h1>
       <h2>Student ID: {students.student_id }</h2>
       <h2>Cohort: {cohort} </h2>
        <p1>Email: {students.email}</p1>
        <Link to={`/gradeform?student=${students.student_id}&cohort=${Trim(students.cohort)}`}>
        <p>Change students grade</p>
        </Link>

      </div>
      <div>
        <h2>Grades:</h2>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        { DisplayGrades() }
      </CardContent>
    </Card>
      </div>
      </div>;
}

export default ShowIndividualStudent;
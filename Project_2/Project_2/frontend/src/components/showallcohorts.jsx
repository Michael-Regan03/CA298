import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import DisplayCohorts from "./DisplayCohorts";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';






function ShowAllCohorts() {
  

  const [cohorts, setCohorts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cohort/")
      .then((response) => response.json())
      .then((data) => {
        setCohorts(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  


  if (!isLoaded) {
    return <p>Loading...</p>;
  }


  return<div>{DisplayCohorts(cohorts)}</div>;
}

export default ShowAllCohorts;
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DisplayStudents from "./DisplayStudents";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ShowIndividualCohort() {
  
  const location = useLocation();
  let cohort = new URLSearchParams(location.search).get("cohort") || "COMBUS1";
  console.log(cohort)
  
  const [students, setStudents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (students.length === 0) {
      fetch(`http://127.0.0.1:8000/api/student/?cohort=${cohort}`)
        .then((req) => req.json())
        .then((data) => {
          setStudents(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [cohort]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
 
 
  return <div>
    <h1>Students in {cohort}</h1>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
        <Link to={`/showmodulesdeliveredtoacohort?delivered_to=${cohort}`} >
          View modules that are delivered to {cohort}
        </Link>
        
        </Typography>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {DisplayStudents(students,cohort)}
    </Grid>
    </Box>
  </div>;
}

export default ShowIndividualCohort;
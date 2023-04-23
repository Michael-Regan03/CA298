import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




const DisplayStudents = (students,cohort) => {
    return students.map((elem) =>
    <Grid xs={6}>
    <Item>
    <Box component="ul"  sx={{ pl: 2 }}>
                 <Link to={`/showindividualstudent?student=${elem.student_id}&cohort=${cohort}`} >
                  <li>{elem.first_name} {elem.last_name}</li>
                 </Link>
                <li>Student ID : {elem.student_id}</li>
              </Box>
    
    </Item>
    </Grid>
      );
  };

export default DisplayStudents;
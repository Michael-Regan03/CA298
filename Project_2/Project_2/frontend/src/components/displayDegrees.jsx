import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const DisplayDegrees = (degrees) => {
    return degrees.map((elem) => (
<Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    <Link to={`/showindividualdegree?shortcode=${elem.shortcode}`} >
    {elem.full_name} 
    </Link>
  </Typography>
  <Typography variant="h5" component="div">
      {elem.shortcode}
  </Typography>
    </CardContent>
    </Card>
    ));
  };

export default DisplayDegrees;
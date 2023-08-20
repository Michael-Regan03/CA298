import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function DisplayOrderStatus () {
    return (
    
    <Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    <Link to={`/showordersbystatus?status=O`} >
    O
    </Link>
  </Typography>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    <Link to={`/showordersbystatus?status=P`} >
    P
    </Link>
  </Typography>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    <Link to={`/showordersbystatus?status=S`} >
    S
    </Link>
  </Typography>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    <Link to={`/showordersbystatus?status=D`} >
    D
    </Link>
  </Typography>
    </CardContent>
    </Card>
    )

}

export default DisplayOrderStatus;
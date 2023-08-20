import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Trim from "./trim";


const DisplayCustomer = (customer) => {
    return customer.map((elem) => (
<Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    ID: { Trim(elem.url) } 
  </Typography>
  <Typography variant="h5" component="div">
    Name: { elem.name }
  </Typography>
  <Typography variant="h5" component="div">
     Email: {elem.email }
  </Typography>
  <Typography variant="h5" component="div">
      Address: {elem.address}
  </Typography>
    </CardContent>
    </Card>
    ));
  };

export default DisplayCustomer;
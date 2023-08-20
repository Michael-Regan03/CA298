import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Trim from "./trim";


const DisplayOrderItems = (orderItems) => {
    
    
    return orderItems.map((elem) => (

        
<Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Product ID:{ Trim(elem.product)} 
  </Typography>
  <Typography variant="h5" component="div">
      Quantity: {elem.quantity}
  </Typography>
    </CardContent>
    </Card>
    ));
  };

export default DisplayOrderItems;
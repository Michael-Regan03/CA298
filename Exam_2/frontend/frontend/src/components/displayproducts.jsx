import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const DisplayProducts = (products) => {
    return products.map((elem) => (
<Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    {elem.name} 
  </Typography>
  <Typography variant="h5" component="div">
      Price: {elem.price}
  </Typography>
    </CardContent>
    </Card>
    ));
  };

export default DisplayProducts;
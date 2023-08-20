import { Link } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Trim from "./trim";


const DisplayOrders = (orders) => {
    return orders.map((elem) => (
<Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  <Link to={`/showindividualorder?id=${Trim(elem.url)}`} >
    Order: { Trim(elem.url) } 
    </Link> 
  </Typography>
  <Typography variant="h5" component="div">
  <Link to={`/showcustomer?CustomerID=${Trim(elem.customer)}`} >
    Customer: { Trim(elem.customer) }
    </Link>
  </Typography>
  <Typography variant="h5" component="div">
      Time: {elem.date_ordered}
  </Typography>
  <Typography variant="h5" component="div">
      Address: {elem.shipping_addr}
  </Typography>
    </CardContent>
    </Card>
    ));
  };

export default DisplayOrders;
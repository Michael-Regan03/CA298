import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DisplayCustomer from "./displaycustomer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Trim from "./trim";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ShowCustomer() {
  
  const location = useLocation();
  let customer = new URLSearchParams(location.search).get("customerID") || "1";
  
  const [customers, setCustomers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (customers.length === 0) {
      fetch(`http://127.0.0.1:8000/api/customer/${customer}/`)
        .then((req) => req.json())
        .then((data) => {
          setCustomers(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [customers]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return(<div>
   <Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    ID: { Trim(customer.url) } 
  </Typography>
  <Typography variant="h5" component="div">
    Name: { customers.name }
  </Typography>
  <Typography variant="h5" component="div">
     Email: {customers.email }
  </Typography>
  <Typography variant="h5" component="div">
      Address: {customers.address}
  </Typography>
    </CardContent>
    </Card>
  </div>);
}

export default ShowCustomer;
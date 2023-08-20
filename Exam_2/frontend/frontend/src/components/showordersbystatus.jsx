import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DisplayOrders from "./displayorders";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ShowOrdersByStatus() {
  
  const location = useLocation();
  let status = new URLSearchParams(location.search).get("status") || "O";
  
  const [orders, setOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (orders.length === 0) {
      fetch(`http://127.0.0.1:8000/api/order/?status=${status}`)
        .then((req) => req.json())
        .then((data) => {
          setOrders(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [orders]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return(<div>
    <h1>Order Status: { status }</h1>
    {DisplayOrders(orders)}
  </div>);
}

export default ShowOrdersByStatus;
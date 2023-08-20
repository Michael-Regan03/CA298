import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Trim from "./trim";
import DisplayOrderItems from "./displayorderitems";




function ShowIndividualOrder() {
  
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("id") || "O";
  
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (orders.length === 0) {
      fetch(`http://127.0.0.1:8000/api/order/${id}/`)
        .then((req) => req.json())
        .then((data) => {
          setOrders(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [orders]);

  useEffect(() => {
    if (orderItems.length === 0) {
      fetch(`http://127.0.0.1:8000/api/orderitem/?order=${orders.url}/`)
        .then((req) => req.json())
        .then((data) => {
          setOrderItems(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [orderItems]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return(<div>
    <Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  <Link to={`/showindividualorder?id=${Trim(orders.url)}`} >
    Order: { Trim(orders.url) } 
    </Link>
  </Typography>
  <Typography variant="h5" component="div">
  <Link to={`/showcustomer?CustomerID=${Trim(orders.customer)}`} >
    Customer: { Trim(orders.customer) }
    </Link>
  </Typography>
  <Typography variant="h5" component="div">
      Time: {orders.date_ordered}
  </Typography>
  <Typography variant="h5" component="div">
      Address: {orders.shipping_addr}
  </Typography>
    </CardContent>
    </Card>
    <div>{DisplayOrderItems(orderItems)}</div>
  </div>);
}

export default ShowIndividualOrder;
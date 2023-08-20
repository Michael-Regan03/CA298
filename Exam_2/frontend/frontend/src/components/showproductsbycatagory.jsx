import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DisplayProducts from "./displayproducts";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ShowProductsByCategory() {
  
  const location = useLocation();
  let shortcode = new URLSearchParams(location.search).get("shortcode") || "btms";
  
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      fetch(`http://127.0.0.1:8000/api/product/?category=${shortcode}`)
        .then((req) => req.json())
        .then((data) => {
          setProducts(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [products]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return(<div>
    <h1>{ shortcode }</h1>
    {DisplayProducts(products)}
  </div>);
}

export default ShowProductsByCategory;
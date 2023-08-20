import { useState, useEffect } from "react";
import DisplayCatagories from "./displaycatagories";

function ShowAllCatagories() {
  

  const [catagories, setCatagories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/category/")
      .then((response) => response.json())
      .then((data) => {
        setCatagories(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  
  return(<div>
    {DisplayCatagories(catagories)}
  </div>);
}

export default ShowAllCatagories;
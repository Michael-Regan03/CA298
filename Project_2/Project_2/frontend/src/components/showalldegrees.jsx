import { useState, useEffect } from "react";
import DisplayDegrees from "./displayDegrees";

function ShowAllDegrees() {
  

  const [degrees, setDegrees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/")
      .then((response) => response.json())
      .then((data) => {
        setDegrees(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  
  return(<div>
    {DisplayDegrees(degrees)}
  </div>);
}

export default ShowAllDegrees;
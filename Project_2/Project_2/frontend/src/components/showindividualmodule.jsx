import { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom'



function ShowIndividualModule() {
  
  
  const location = useLocation();
  const module = new URLSearchParams(location.search).get("module") || "COMSCI";

  
  const [modules, setModules] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (modules.length === 0) {
      fetch(`http://127.0.0.1:8000/api/module/${module}/`)
      .then((req) => req.json())
        .then((data) => {
          setModules(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [module]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  
  return(
    <div>
        <h1>{modules.code}</h1>
        <h2>{ modules.full_name }</h2>
        <p1>ca split: {modules.ca_split}</p1>
    </div> 
        );
}

export default ShowIndividualModule;
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import DisplayModules from "./displaymodules";



function ShowModulesDeliveredToACohort() {
  
  const location = useLocation();
  const cohort = new URLSearchParams(location.search).get("delivered_to") || "COMBUS1";

  
  const [modules, setModules] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (modules.length === 0) {
      
      fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohort}`)
        .then((req) => req.json())
        .then((data) => {
          setModules(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [cohort]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return <div><h1>Modules that are delivered by {cohort}</h1>{DisplayModules(modules)}</div>;
}

export default ShowModulesDeliveredToACohort;
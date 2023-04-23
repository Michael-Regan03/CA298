import { useState, useEffect } from "react";
import DisplayModules from "./displaymodules";


function ShowAllModules() {
  
  const [modules, setModules] = useState([]);
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/module/")
      .then((response) => response.json())
      .then((data) => {
        setModules(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return<div>{DisplayModules(modules)}</div>;
}


export default ShowAllModules;
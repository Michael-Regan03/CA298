import { useState, useEffect } from "react";

function ShowAllDegrees() {
    const [facts, setFacts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/degree/")
        .then((response) => response.json())
        .then((data) => {
          setFacts(data.map((e) => e.full_name));
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }, []);
  
    if (!isLoaded) {
      return <p>Loading...</p>;
    }
  
    const displayFacts = () => {
      return facts.map((elem) => <li>{elem}</li>);
    };
  
    return <ul>{displayFacts()}</ul>;
  }
  
  export default ShowAllDegrees;

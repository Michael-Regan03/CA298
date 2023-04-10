import { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom'

function ShowIndividualDegree() {
  
  //const { type } = useParams().type;
  //const shortnameVal = useLocation().state.shortname;
  const location = useLocation();
  const shortcode = new URLSearchParams(location.search).get("shortcode") || "COMSCI";

  
  const [facts, setFacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (facts.length === 0) {
      fetch(`http://127.0.0.1:8000/api/cohort/?degree=${shortcode}`)
        .then((req) => req.json())
        .then((data) => {
          setFacts(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [shortcode]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const display = () => {
    //if (!Array.isArray(facts)) {
    //  return null; // or some other fallback element
    //}
    return facts.map((elem) => <ul>
      <li>{elem.id}</li>
      <li>{elem.year}</li>
      <li>{elem.name}</li>
      
      </ul>);
  };
  
  return <div>{display()}</div>;
}

export default ShowIndividualDegree;
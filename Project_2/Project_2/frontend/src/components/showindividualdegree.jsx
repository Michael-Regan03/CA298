import { useState, useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom'
import DisplayCohorts from "./DisplayCohorts";

function ShowIndividualDegree() {
  
  const location = useLocation();
  const shortcode = new URLSearchParams(location.search).get("shortcode") || "COMSCI";

  
  const [cohorts, setCohorts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (cohorts.length === 0) {
      fetch(`http://127.0.0.1:8000/api/cohort/?degree=${shortcode}`)
        .then((req) => req.json())
        .then((data) => {
          setCohorts(data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [shortcode]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  
  return( <div><h1>{ shortcode }</h1>{DisplayCohorts(cohorts)}</div>);
}

export default ShowIndividualDegree;
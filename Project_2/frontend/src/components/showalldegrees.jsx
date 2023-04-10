import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import ShowIndividualDegree from "./showindividualdegree";

function ShowAllDegrees() {
  

  const [facts, setFacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree/")
      .then((response) => response.json())
      .then((data) => {
        setFacts(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const displayFacts = () => {
    return facts.map((elem) => (
      <Link to={`/showindividualdegree?shortcode=${elem.shortcode}`} >
        <li>{elem.full_name}</li>
        
      </Link>
    ));
  };

  return(<div>
  <ul>{displayFacts()}</ul>
  <a href="/degreeform">create new degree</a>
  </div>);
}

export default ShowAllDegrees;
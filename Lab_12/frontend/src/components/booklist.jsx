import { useState, useEffect } from "react";

function BookList(){
    const [facts, setFacts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        // our code goes here
        fetch("`http://127.0.0.1:8000/apibook/`")
        .then(response=>response.json())
        .then(data=>{
            setFacts(data)
            setIsLoaded(true);
        })
        .catch(err=>console.log(err))
    })

    const displayFacts = () =>{
        return facts.map(elem=>
            <li>{elem.Title}</li> // return the jsx to render
        )
    }

    if(isLoaded){
        return (
            <div>
            <ul>
                {displayFacts()}
            </ul>
            </div>
        )
    }
    else{
        return (
            <img src="loading.png" />
        )
    }

}

export default BookList;
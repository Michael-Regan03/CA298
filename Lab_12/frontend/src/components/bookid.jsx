import { useState, useEffect } from "react";

function BookID({id=1}){
    const [facts, setFacts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        // our code goes here
        fetch("`http://127.0.0.1:8000/apibook/"+ `${id}`)
        .then(response=>response.json())
        .then(data=>{
            setFacts(data.map(e=>e.Title))
                            setIsLoaded(true);
        })
        .catch(err=>console.log(err))
    })

    const displayFacts = () =>{
        return facts.map(elem=>
            <li>{elem}</li> // return the jsx to render
        )
    }

    if(isLoaded){
        return (
            <ul>
                {displayFacts()}
            </ul>
        )
    }
    else{
        return (
            <img src="loading.png" />
        )
    }

}

export default BookID;
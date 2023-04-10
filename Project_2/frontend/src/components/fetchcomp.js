import React from "react";
import { useState, useEffect } from "react";


export default function FetchComponent(props){

    const [data, setData] = useState({})


   
    makeReq =() =>{
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(req=>req.json())
        .then(json=>{
            
            setData({data:json.height});
            
        })
    }


    return(
        <div>
            {this.state.data}
            <button onClick={this.makeReq}>Click me</button>
        </div>
    )
}


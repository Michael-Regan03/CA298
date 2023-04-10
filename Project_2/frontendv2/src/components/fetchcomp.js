import React from "react";
import { useState, useEffect } from "react";


export default function FetchComponent(props){

    const [data, setData] = useState({})


   
    makeReq =() =>{
        fetch("http://127.0.0.1:8000/api/degree/")
        .then(req=>req.json())
        .then(json=>{
            
            setData({data:json.full_name});
            
        })
    }


    return(
        <div>
            {this.state.data}
            <button onClick={this.makeReq}>Click me</button>
        </div>
    )
}


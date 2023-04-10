import React from "react";

function SecondComponent(props){

        const callback = props.callback;

        return(
            <div>
                <p>My second component</p>
                <button onClick={()=>{
                    callback(5);
                }}>Click me</button>
            </div>
        )
    
}

export default SecondComponent;
import React from "react";
import SecondComponent from "./secondcomponent";
import { Outlet, Link } from "react-router-dom";
import NestedComponent from "./nestComponent";
import BasicCard from "./card";


class FirstComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            counter:props.counter,
            name:"Michael"
        }
    }

    componentDidMount() {
        console.log("rendered correctly");
    }


    changeName=()=>{
        this.setState({name:"John"});
    }

    changeCount = () =>{
        let count = this.state.counter+1;
        this.setState({counter:count});
    }

    handleChange = (event) =>{
        console.log(event.target.value);
        this.setState({name:event.target.value});
    }

    render(){
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <NestedComponent/>
                <p>Counter {this.state.counter}</p>
                <Link to="/">Go to another page</Link>
                <button type="button" onClick={this.changeCount}>Count</button>
                <label >Change my name</label>
                <input type="text" name="newname" onChange={this.handleChange}></input>
                <button type="button" onClick={this.changeName}>Change my name</button>
                <BasicCard/>
            </div>
        )
    }
}

export default FirstComponent;
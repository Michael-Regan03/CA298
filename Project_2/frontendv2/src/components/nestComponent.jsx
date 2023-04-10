import SecondComponent from "./secondcomponent";

function NestedComponent(){

    const myFunction = (x) =>{
        console.log(`Hello from nested component, value is ${x}`)
    }

    return (<p>
        <SecondComponent callback={myFunction}/>
    </p>)
}

export default NestedComponent;
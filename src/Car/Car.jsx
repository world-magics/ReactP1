import React,{useState} from "react";

// const [state, setState] = useState(0);
// const random1=()=>{
//     setState({Math.round(Math.random*10)});
//                   }



function Car(props) {
    // const [state, setState] = useState(10);

    // const random1=()=>{
    //     setState(Math.round(Math.random()*10));
    // }
    return (
        <>
        {/* <h1>Xray Random {state}</h1>

        <button onClick={random1}>Random</button> */}

        <h3>Car name:{props.name}</h3>
        {props.children}
        <p>Year: <strong>{props.year}</strong></p>
        </>
    )
}

export default Car

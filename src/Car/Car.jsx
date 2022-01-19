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
        <div style={{
            border:'1px solid #ccc',
            marginBottom:'10px',
            display:'block',
            padding:'10px'
        }}>
        {/* <h1>Xray Random {state}</h1>

        <button onClick={random1}>Random</button> */}

        <h3>Car name:{props.name}</h3>
        {props.children}
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName}  />
        <button onClick={props.onChangeTitle}>Click Button</button>
        </div>
    )
}

export default Car

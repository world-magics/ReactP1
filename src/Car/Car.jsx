import React, { Component } from "react";
import Counter from "../Counter/Counter";
import withClass from "../hoc/withClass";
// import Radium from 'radium'
import classes from './Car.css'
// const [state, setState] = useState(0);
// const random1=()=>{
//     setState({Math.round(Math.random*10)});
//                   }
import PropTypes  from 'prop-types'
class Car extends React.Component{

    componentWillReceiveProps(nextProps){
        console.log('Car componentWillReceiveProps',nextProps)    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Car shouldComponentUpdate',nextProps);
        return nextProps.name.trim() !==this.props.name.trim();

    }
    componentWillUpdate(nextProps,nextState){
        console.log('Car componentWillUpdate',nextProps)    

    }
    // static getDrivedStateFromProps(nextProps,prevState){
    //     console.log('Car getDrivedStateFromProps',  nextProps,prevState);
    //     return prevState
    // }

    componentDidUpdate(nextProps){
        console.log('Car componentDidUpdatev',nextProps)    

    }

    // getSnapshotBeforeUpdate(){
    //     console.log("Car getSnapshotBeforeUpdate ");
    // }

    componentWillUnmount(){
        console.log('Car componentWillUnmount')
    }
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        if(this.props.index===0){
            this.inputRef.current.focus()
        } 
        this.inputRef.current.style.background='red'
    }

    render(){
      
        console.log('Car render')    

        // if(Math.random()>0.7){
        //     throw new Error('Car random failed')
        // }

 // const [state, setState] = useState(10);

    // const random1=()=>{
    //     setState(Math.round(Math.random()*10));
    // }
    const inputClasses=[classes.input]
    // const green=['green']
    if(this.props.name!==''){
        inputClasses.push(classes.green);
    }
    else{
        inputClasses.push(classes.red);
    }

    if(this.props.name.length>4){
        inputClasses.push(classes.bold);
    }
    // const style={  
    //     border:'1 2px solid #ccc',
    //     boxShadow:'0 4px 5px 0 rgba(0, 0, 0, .14)',
    //     ':hover':{
    //         border:'1px solid red',
    //         boxShadow:'0 14px 45px 0 rgba(0,0,0,.25)'
    //     }
    // }
    return (
        
 
        <React.Fragment>
            
        {/* <h1>Xray Random {state}</h1>

        <button onClick={random1}>Random</button> */}
  <Counter/>
        <h3>Car name:{this.props.name}</h3>
        {this.props.children}
        <p>Year: <strong>{this.props.year}</strong></p>
        <input 
        ref={this.inputRef}
        type="text"
        onChange={this.props.onChangeName} 
        value={this.props.name}
        className={inputClasses.join(' ')} />
        <button onClick={this.props.onChangeTitle}>Click Button</button>
        <button onClick={this.props.onDelete}>Delete</button>
        </React.Fragment>
       
    )
    }
}

Car.propTypes={
    name:PropTypes.string.isRequired,
    year:PropTypes.number,
    index:PropTypes.number,
    onChangeName:PropTypes.func,
    onDelete:PropTypes.func

}


export default withClass(Car,classes.Car);

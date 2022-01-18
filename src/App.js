import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.development';
import React from 'react';
import Car from './Car/Car';
class App extends Component{
  render(){

    const divStyle={
      textAlign:'center'
  

   }

    // return React.createElement(
    //   'div',
    //   null,
    //   React.createElement(
    //     'h1',
    //     null,
    //     'Xray- Ray Github Repository',

    //   )
      
    // )
 
  return (
    <div style={divStyle}>
    <h1>Xray Ray</h1>
    <Car name={' Mers '} year={2018}>
    <p style={{color:'red'}}>Lorem ipsum dolor sit amet.</p>
    </Car>

    <Car name=' Ford ' year={2016}>
    <p style={{color:'blue'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, corrupti?</p>
    </Car>
    </div>
  );
}  
}

export default App;

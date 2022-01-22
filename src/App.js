import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.development';
import React from 'react';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component{

  constructor(props){
    super()
    this.state={ 
      cars:[
        {name:'FlyMachine',year:2019},
        {name:'Hyundai',year:2021},
        {name:'Electical Machine',year:2022},
        {name:'GM',year:2023},
        {name:'Lacetii',year:2024},
        {name:'General',year:2025},
        {name:'Mobile',year:2026},
        {name:'Lexus',year:2027},
      ],
      pageTitle:'React components',
      showCars:false
    }
  }

  
  // changeTitleHandler=(newTitle)=>{
  //  alert("dawd"); 
    // const oldTitle=this.state.pageTitle;
   
    // const newoldTitle=oldTitle+' (changed)'
  
  //  this.setState({
  //    pageTitle:newTitle
  //  })

  // }

  toggleCarsHandler=()=>{
    this.setState({
      showCars:!this.state.showCars 
    })
  }

  changeTitleHandler=pageTitle=>{
    this.setState({pageTitle})
  }
  onChangeName(name,index){
       console.log(name,index);
       const car=this.state.cars[index]
      car.name=name


      //  const cars=this.state.cars.concat() 
       //or this is with concat method or array method

       const cars=[...this.state.cars]
        cars[index]=car
        this.setState({cars})

       this.state.cars[index]=car
  }

  deleteHandler=(index)=>{
     console.log("delete");
    //  this.setState({pageTitle:'Deleted'})
      
      const cars=this.state.cars.concat();
      cars.splice(index,1)
      this.setState({cars})
    }
    componentWillMount(){
      console.log('App componentWillMount'); 
      }
    componentDidMount(){
      console.log('App componentDidMount'); 
      }
  // handleInput=(event)=>{ 
  //   // console.log("sda",event.target.value);
  //   this.setState({
  //     pageTitle:event.target.value
  //   })
  // } 
  render(){
    console.log('App render')
    const divStyle={
      textAlign:'center'
  

   }
    let cars=null
   if(this.state.showCars){
  cars= this.state.cars.map((car,index)=>{
      return (
        <ErrorBoundary   key={index}>
        <Car 
      
        name={car.name}
        year={car.year}
        onChangeTitle={()=>this.changeTitleHandler(car.name)}
        onChangeName={event=>this.onChangeName(event.target.value,index)}
        onDelete={this.deleteHandler.bind(this,index)}
        />
        </ErrorBoundary>
      )
    })
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
// const cars=this.state.cars
  return (
    <div style={divStyle}>
    <h1>{this.props.title}</h1>

    {/* <input type="text" onChange={this.handleInput} /> */}
    {/* <Car name={' Mers '} year={2018}>
    <p style={{color:'red'}}>Lorem ipsum dolor sit amet.</p>
    </Car>

    <Car name=' Ford ' year={2016}>
    <p style={{color:'blue'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, corrupti?</p>
    </Car> */}
    
    <h1>{this.state.pageTitle}</h1>
    {/* <button onClick={this.changeTitleHandler.bind(this,'Changed!') }>Change title</button> */}
    <button onClick={this.toggleCarsHandler}>Toogle Bar</button>
    
    <div style={{
      width:400,
      margin:'auto',
      paddingTop:'20px',
      }}>
    {cars}
    </div>
   
   
   
   
   
   
   
   
   
   
    {/* <Car 
    name={cars[0].name} 
    year={cars[0].year}
    onChangeTitle={this.changeTitleHandler.bind(this,cars[0].name)}/>
    <Car 
    name={cars[1].name} 
    year={cars[1].year}
    onChangeTitle={()=>this.changeTitleHandler(cars[1].name)}
    />
    <Car 
    name={cars[2].name} 
    year={cars[2].year}
    onChangeTitle={()=>this.changeTitleHandler(cars[2].name)}
   /> */}
    </div>
  );
}  
}

export default App;

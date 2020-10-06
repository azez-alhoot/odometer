import React from 'react';
import './App.css';

class Odometre extends React.Component {
  constructor(){
    super();
    this.state ={
      counter: 0,
      val: "0000"
    }
  }
  // zeroPad = (num, places) => String(num).padStart(places, '0')
  zeroPad(num,places){
    return String(num).padStart(places,'0')
  }

  addToOdometer(num){
    this.state.counter += num

    if(this.state.counter>9999){
      this.state.counter = this.state.counter-9999
    }

    let odometer_val2 = this.state.counter.toString().padStart(4, "0");

    this.setState({
      counter: this.state.counter, 
      val: odometer_val2
    })

  }

  render(){
    return(
      <>
      <h1>{this.state.val}</h1>
      <button onClick={ () => this.addToOdometer(1)}> Add 1</button>
      <button onClick={ () => this.addToOdometer(10)}> Add 10</button>
      <button onClick={ () => this.addToOdometer(100)}> Add 100</button>
      <button onClick={ () => this.addToOdometer(1000)}> Add 1000</button>
      </>
    );
  }


}
function Header(props){
    return(
      <header className = "Header">
        <h1>You are Welcome In My First React App</h1>
        <h2>{props.text}</h2>

      </header>
    );
}

function Footer(props){
  return (
    <footer>
      <h3>Copy Right For @ {props.trademark}</h3>
    </footer>
  );
}

export default function App(){

  return (
    <>
      <Header text = "Odometre" />

      <Odometre/>
      <Footer trademark = "Range Rover" />
    </>
  );
}

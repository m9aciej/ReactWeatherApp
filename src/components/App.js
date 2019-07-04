import React, {Component} from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

//klucz API
const APIKey = "c1e9826fe7cbbcb53884ce4e27206e06";

class App extends Component {

  //stan
  state ={
    value: "",
    date: "",
    city: "",
    temp: "",
    pressure: "",
    wind: "",
    sunrise: "",
    sunset: "",
    error: "",
  }
  //zmiana stanu
  InputChange = (e) =>{
    this.setState({
      value: e.target.value
    })
  }
  // CitySubmit = (e) => {
  //   e.preventDefault()
  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
    
  //   fetch(API)
  //   .then(resp => {
  //     if(resp.ok){
  //      return resp 
  //     }
  //     throw Error("nie udało się uzyskać danych")
  //   })
  //   .then(resp => resp.json())
  //   .then(data => {
  //     const d=new Date().toLocaleString();
  //     this.setState({
        
  //       error: false,
  //       date: d,
  //       city: this.state.value,
  //       temp: data.main.temp,
  //       pressure: data.main.pressure,
  //       wind: data.wind.speed,
  //       sunrise: data.sys.sunrise,
  //       sunset: data.sys.sunset,

  //     })
  //     //console.log(data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     this.setState({
  //       error: true,
  //       city: this.state.value
  //     })
  //   })
  // }
  componentDidMount(){
    //tylko raz
  }
  componentDidUpdate(prevProps, prevState){
    //przy kazdej zmianie


    if(this.state.value.length ===0) return
    if(prevState.value !== this.state.value){
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
    
      fetch(API,{method: 'GET'})
      .then(resp => {
        if(resp.ok){
          return resp 
        }
        throw Error("nie udało się uzyskać danych")
      })
      .then(resp => resp.json())
      .then(data => {
        const d=new Date().toLocaleString();
        this.setState({
        
          error: false,
          date: d,
          city: this.state.value,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        })
      //console.log(data)
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: true,
          city: this.state.value
        })
      })
    }
  }
  render(){
    return(
      <div className="App">
 
      <Form value={this.state.value} 
        change={this.InputChange}
        // submit={this.CitySubmit}
      /> {/* przekazywanie wlasciwosci */}
      <Result
        weather = {this.state}
      />
      </div>
    
    );
  }
}
export default App;

import React, { Component } from 'react';
import Header from '../src/components/Header'
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import './App.css';



class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Login />
        <MainContainer />
      </div>
    )
  }
}

export default App;

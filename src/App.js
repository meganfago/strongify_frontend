import React, { Component } from 'react';
import Header from '../src/components/Header'
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom'
import './App.css';



class App extends Component {
  
  state ={ 
    user: localStorage.getItem("username")
  }

  updateUser = (user) => {
    this.setState({
      user: user
    })
  }

  logout = () => {
    this.setState({
      user: null
    })
    localStorage.clear()
  }

  render(){
    console.log("I'm the user: ", this.state.user)
    return(
      <div>
        <Header/>
        <Switch>
        
        <Route path="/login" render={()=> <Login 
        updateUser={this.updateUser} 
        />}/>
        <Route path="/profile" render={() => localStorage.getItem("username") === null ? <Login/> : <MainContainer user={this.state.user} logout={this.logout}/>} />
      
        </Switch>
      </div>
    )
  }
}

export default App;

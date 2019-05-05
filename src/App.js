import React, { Component } from 'react';
import Header from '../src/components/Header'
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NewWorkout from './components/NewWorkout';
import HomePage from './components/HomePage';


class App extends Component {
  
  state ={ 
    user: localStorage.getItem("username"),
    user_token: localStorage.getItem("token"),
    user_id: localStorage.getItem("id"),
    workouts: [],
    user_workouts: []
  }

  componentDidMount(){
    this.fetchWorkouts()
  }

  fetchWorkouts =() => {
    fetch(`http://localhost:3000/workouts`)
    .then(resp => resp.json())
    .then(workouts => this.setState({workouts}))
  }

  updateUser = (user) => {
    this.setState({
      user: user,
      user_token: user.token,
      user_id: user.id
    })
  }

  updateWorkouts = (workout) => {
    this.setState({
      workouts: [...this.state.workouts, workout]
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
    console.log("This is my user id", this.state.user_id)

    return(
      <div>
        <Header/>
        <Switch>
          
        <Route exact path="/" render={() => <HomePage/>} />
        
        <Route exact path="/login" render={()=> <Login 
        updateUser={this.updateUser} 
        />}/>

        <Route exact path="/profile" render={() => localStorage.getItem("username") === null ? 
        <Login/> : 
        <MainContainer 
        user={this.state.user} 
        user_id={this.state.user_id}
        user_token={this.state.user_token}
        workouts={this.state.workouts}
        logout={this.logout}/>} />

        <Route exact path="/signup" render={() => <Signup updateUser={this.updateUser} />}/>

        <Route exact path="/newworkout" render={() => <NewWorkout 
        user={this.state.user}
        user_id={this.state.user_id}
        updateWorkouts={this.updateWorkouts} 
        user_token={this.state.user_token}/>}/>

        
      
        </Switch>
      </div>
    )
  }
}

export default App;

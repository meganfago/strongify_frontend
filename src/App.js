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
    workouts: [],
    workout_exercises: []
  }

  componentDidMount(){
    this.fetchWorkouts()
    this.fetchWorkoutExercises()
  }

  fetchWorkouts =() => {
    fetch(`http://localhost:3000/workouts`)
    .then(resp => resp.json())
    .then(workouts => this.setState({workouts}))
  }

  fetchWorkoutExercises = () => {
    fetch('http://localhost:3000/workout_exercises')
    .then(resp => resp.json())
    .then(workout_exercises => this.setState({workout_exercises}))
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
        
        <Route exact path="/login" render={()=> <Login 
        updateUser={this.updateUser} 
        />}/>

        <Route exact path="/profile" render={() => localStorage.getItem("username") === null ? 
        <Login/> : 
        <MainContainer 
        user={this.state.user} 
        workouts={this.state.workouts}
        workout_exercises={this.state.workout_exercises}
        logout={this.logout}/>} />

        <Route exact path="/signup" render={() => <Signup updateUser={this.updateUser} />}/>

        <Route exact path="/newworkout" render={() => <NewWorkout/>}/>

        <Route exact path="/" render={() => <HomePage/>} />
      
        </Switch>
      </div>
    )
  }
}

export default App;

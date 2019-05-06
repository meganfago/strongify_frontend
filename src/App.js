import React, { Component } from 'react';
import Header from '../src/components/Header'
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NewWorkout from './components/NewWorkout';
import HomePage from './components/HomePage';
import WorkoutDetail from './components/WorkoutDetail';
import PlanPage from './components/PlanPage'


class App extends Component {
  state = { 
    user: localStorage.getItem("username"),
    user_token: localStorage.getItem("token"),
    user_id: localStorage.getItem("id"),
    user_name: localStorage.getItem("name"),
    image: localStorage.getItem("image"),
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
  
  signUpUser = (user) => {
    this.setState({
      user: user,
      user_id: user.id,
      user_name: user.name    
    })
  }

  updateUser = (user) => {
    this.setState({
      user: user,
      user_id: user.id,
      user_token: user.token,
      user_name: user.name,
      image: user.image
    })
  }

  updateUserWorkouts = (user_workout) => {
    this.setState({
      user_workouts: [...this.state.user_workouts, user_workout]
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
    console.log("this is the image", this.state.image)
    console.log("This is my user id", this.state.user_id)
    console.log("this is the user token", this.state.user_token)
  

    return(
      <div>
        <Header/>
        <Switch>

        <Route exact path="/" render={() => <HomePage/>} /> 
        
        <Route exact path="/login" render={()=> <Login 
        updateUser={this.updateUser} 
        />}/>

        <Route exact path="/profile" render={() => localStorage.getItem("username") === null ? 
        <HomePage/> : 
        <MainContainer 
        user={this.state.user} 
        user_id={this.state.user_id}
        image={this.state.image}
        user_name={this.state.user_name}
        workouts={this.state.workouts}
        logout={this.logout}/>} />

        <Route exact path="/signup" render={() => <Signup signUpUser={this.signUpUser} />}/>

        <Route exact path="/workout/new" render={() => <NewWorkout 
        user={this.state.user}
        user_id={this.state.user_id}
        updateWorkouts={this.updateWorkouts} 
        user_token={this.state.user_token}/>}/>

        <Route exact path="/workouts/:id" render={({ match }) => {
            let workoutId = parseInt(match.params.id)
            let workout = this.state.workouts.find(workout => workout.id === workoutId)
            return workout ? <WorkoutDetail workout={workout} updateUserWorkouts={this.updateUserWorkouts} /> : null;
          }} /> 

        <Route exact path="/myworkouts" render={() => this.state.user_workouts === null ?
        <MainContainer/> :
        <PlanPage user={this.state.user}
        user_token={this.state.user_token}
        user_id={this.state.user_id} />}/>
      

        </Switch>
      </div>
    )
  }
}

export default App;

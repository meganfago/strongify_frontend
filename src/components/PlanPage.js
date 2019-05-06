import React, { Component } from 'react';
import PlanItem from '../components/PlanItem';
import { withRouter } from 'react-router-dom';

class PlanPage extends Component{
    
    state = {
        user_workouts: []
    }

    componentDidMount(){
        this.fetchUserWorkouts()
    }

    fetchUserWorkouts = () => {
        fetch('http://localhost:3000/user_workouts', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem("token")},
            })
            .then(resp => resp.json())
            .then(user_workouts => this.setState({user_workouts}))
        }
    
    render(){
        return(
            <div>
                <h2> hello from the plan page</h2>
                {this.state.user_workouts.map(uw => <PlanItem user_workout={uw} workouts={this.props.workouts} user={this.props.user}/>)}
            </div>
        )
    }
}

export default PlanPage;

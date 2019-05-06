import React, { Component } from 'react';
import PlanItem from '../components/PlanItem';
import { withRouter } from 'react-router-dom';

class PlanPage extends Component{
    
    state = {
        user_workouts: [],
        workouts: []
    }

    componentDidMount(){
        this.fetchUserWorkouts()
    }

    fetchUserWorkouts = () => {
        fetch('http://localhost:3000/myworkouts', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({user_id: this.props.user_id})
            })
            .then(resp => resp.json())
           // .then(user_workouts => this.setState({user_workouts}))
           .then(data => this.setState({
               user_workouts: data.user_workouts,
               workouts: data.workouts
            }))
        }
    
    render(){
        console.log("these are the user workouts on plan page", this.state.workouts)
        console.log("this is my token on plan page", this.props.user_token)
        return(
            <div>
                <h2> hello from the plan page</h2>
                {this.state.workouts.map(workout => <PlanItem workout={workout} user={this.props.user}/>)}
            </div>
        )
    }
}

export default PlanPage;

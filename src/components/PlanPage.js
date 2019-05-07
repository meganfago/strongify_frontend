import React, { Component } from 'react';
import PlanItem from '../components/PlanItem';
import { Grid } from 'semantic-ui-react'

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
            .then(data => this.setState({
               user_workouts: data.user_workouts,
               workouts: data.workouts
            }))
        }
    
    render(){
        console.log("these are the user workouts on plan page", this.state.workouts)
        
        return(
            <div>
                <Grid divided='vertically'>
                <Grid.Row columns={2}>
                <Grid.Column>
                <h2> hello from the plan page</h2>
                {this.state.workouts.map(workout => <PlanItem workout={workout}/>)}
                </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default PlanPage;

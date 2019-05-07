import React, { Component } from 'react';
import PlanItem from '../components/PlanItem';
import WorkoutItem from '../components/WorkoutItem';
import { Grid, Header, Divider, Button } from 'semantic-ui-react'

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
        console.log("these are the user workouts on plan page", this.state.user_workouts)
        console.log("these are the workouts that user has made?", this.state.workouts)
        
        return(
            <div class='item'>
                <Header textAlign='center' as='h2'> hello from the plan page</Header>
                <Button href='/profile'>Back to Profile</Button>
                
                <Grid divided='vertically'>
                <Grid.Row columns={4}>
                <Grid.Column width={2}></Grid.Column>
               
                <Grid.Column width={6}> 
                <Header>My Plan Workouts</Header>
                {this.state.workouts.map(workout => <PlanItem workout={workout}/>)}
                </Grid.Column>
               

                <Divider section />

                <div class='item'>
                <Grid.Column width={6}>
                    {this.state.user_workouts.map(uw => <WorkoutItem user_workout={uw}/>)}
                </Grid.Column>
                </div>
                <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                </Grid>
            
            </div>
        )
    }
}

export default PlanPage;

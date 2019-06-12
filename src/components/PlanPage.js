import React, { Component } from 'react';
import PlanItem from '../components/PlanItem';
import WorkoutItem from '../components/WorkoutItem';
import { Grid, Header, Card, Button } from 'semantic-ui-react'

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
        
        return(
            <div>
                <Header textAlign='center' as='h2'> hello from the plan page</Header>
                <Button href='/profile'>Back to Profile</Button>
                
                <Grid celled divided='vertically'>
                <Grid.Row columns={4}>
                <Grid.Column width={2}></Grid.Column>
               
                <Grid.Column width={12}> 
                <Header>My Plan Workouts</Header>
                <Card.Group centered>
                {this.state.workouts.map(workout => <PlanItem workout={workout} removeWorkout={this.props.removeWorkout}/>)}
                </Card.Group>
                </Grid.Column>
                <Grid.Column width={2}></Grid.Column> 
                </Grid.Row>
                </Grid>
            
            </div>
        )
    }
}

export default PlanPage;

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { List, Button, Grid, Header, Container} from 'semantic-ui-react'

class WorkoutDetail extends Component {

    handleSubmit = (event) => {
        const workout_id = this.props.workout.id
        const user_id = localStorage.getItem("id")
        const workout_name = this.props.workout.workout_name
        const exercise_name = this.props.workout.exercise_name
        const exercise_name2 = this.props.workout.exercise_name2
        const exercise_name3 = this.props.workout.exercise_name3
        const description = this.props.workout.description 
        const reps = this.props.workout.reps
        const reps2 = this.props.workout.reps2
        const reps3 = this.props.workout.reps3
        const sets = this.props.workout.sets
        const sets2 = this.props.workout.sets2
        const sets3 = this.props.workout.sets3
        const weight = this.props.workout.weight
        const weight2 = this.props.workout.weight2
        const weight3 = this.props.workout.weight3

        const user_workout ={
            workout_id: workout_id,
            user_id: user_id,
            workout_name: workout_name,
            exercise_name: exercise_name,
            exercise_name2: exercise_name2,
            exercise_name3: exercise_name3,
            description: description,
            user_reps: reps,
            user_reps2: reps2,
            user_reps3: reps3,
            user_sets: sets,
            user_sets2: sets2,
            user_sets3: sets3,
            user_weight: weight,
            user_weight2: weight2,
            user_weight3: weight3
        }

        event.preventDefault()
        fetch(`http://localhost:3000/user_workouts`, {
          method: 'POST',
          headers: {
          'Content-Type' : 'application/json'
          }, 
          body: JSON.stringify(user_workout)
        }).then(resp => resp.json())
        .then(workout => {
          this.props.updateUserWorkouts(workout)
        })
          this.props.history.push(`/profile`)
        }

    render(){
        console.log("this is the workout", this.props.workout)
        console.log("now i'm the user in workout detail", localStorage.getItem("name"))
     
        return(
            <div>
                <Grid columns={3} padded divided='vertically'>
                <Grid.Column width={6}></Grid.Column>
                <Grid.Column width={4}></Grid.Column>
                <List>
                    <Container text textAlign='center'>
                    <Header as='h2'>{this.props.workout.workout_name}</Header>
                    <Header as='h3'> Created By: {this.props.workout.user_name} </Header>
                    <p>{this.props.workout.description}</p>
                    <ul>
                      
                    </ul>
                   <br></br>
                    <Button color='blue'onClick={this.handleSubmit}>Add to Plan</Button>
                    <Button color='red' href='/profile'> Go Back</Button>
                    </Container>
                    </List>
                <Grid.Column width={6}></Grid.Column>
                </Grid>
            </div>
        )
    }
}

const WorkoutDetailWithRouter =withRouter(WorkoutDetail)
export default WorkoutDetailWithRouter;

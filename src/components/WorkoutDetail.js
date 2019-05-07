import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { List, Button, Grid, Header, Container} from 'semantic-ui-react'

class WorkoutDetail extends Component {

    handleSubmit = (event) => {
        const workout_id = this.props.workout.id
        const user_id = localStorage.getItem("id")
        const user_workout ={
            workout_id: workout_id,
            user_id: user_id
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
        console.log("now i'm the user in workout detail", this.props.user)
     
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
                    <Button color='red'onClick={this.handleSubmit} >add to plan</Button>
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

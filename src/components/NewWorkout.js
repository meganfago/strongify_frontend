import React, { Component } from 'react'
import { Grid, Button, Form, TextArea } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class NewWorkout extends Component {
    state = {
        workout_name: '',
        exercise_name: '',
        sets: '',
        reps: '',
        weight: '',
        description: '',
        user_name: localStorage.getItem("username")
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/workouts`, {
          method: 'POST',
          headers: {
          'Content-Type' : 'application/json'
          }, 
          body: JSON.stringify(this.state)
        }).then(resp => resp.json())
        .then(workout => {
          this.props.updateWorkouts(workout)
        })
          event.target.reset()
          this.props.history.push(`/profile`)
        }

    render(){
        console.log("I am the user id", this.props.user_id)
        console.log("I am the user", localStorage.getItem("username"))
        return(
            <div>
                <Grid columns={3} padded>
                <Grid.Column width={5}></Grid.Column>
                <Grid.Column width={6}>
                    <h2> Hello from the new workout form </h2>
                <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Workout Name</label>
                    <input placeholder='Workout Name' 
                     onChange={(e) => this.setState({workout_name: e.target.value}) }/>
                </Form.Field>
                <Form.Field>
                    <label>Exercise Name</label>
                    <input placeholder='Exercise Name' 
                     onChange={(e) => this.setState({exercise_name: e.target.value}) }/>
                </Form.Field>
                <Form.Field>
                    <label>Sets</label>
                    <input placeholder='Sets'
                     onChange={(e) => this.setState({sets: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Reps</label>
                    <input placeholder='Reps' 
                     onChange={(e) => this.setState({reps: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Weight</label>
                    <input placeholder='Weight' 
                     onChange={(e) => this.setState({weight: e.target.value}) } />               
                </Form.Field>
                <Form.Field>
                    <label>Short Description</label>
                    <TextArea placeholder='example: Squats, Deadlifts, and Leg Press' 
                     onChange={(e) => this.setState({description: e.target.value}) } />               
                </Form.Field>                
            <Button type='submit'>Submit</Button>
            </Form>
                </Grid.Column>
                <Grid.Column width={5}></Grid.Column>
                </Grid>
            </div>
        )
    }

}
const NewWorkoutWithRouter = withRouter(NewWorkout)
export default NewWorkoutWithRouter;
import React, { Component } from 'react'
import { Grid, Button, Form } from 'semantic-ui-react'

class NewWorkout extends Component {
    state = {
        workout_name: '',
        exercise_name: '',
        sets: '',
        reps: '',

    }

    render(){
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
            <Button type='submit'>Submit</Button>
            </Form>
                </Grid.Column>
                <Grid.Column width={5}></Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default NewWorkout
import React, { Component } from 'react'
import { Grid, Button, Form, TextArea, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class NewWorkout extends Component {
    state = {
        workout_name: '',
        description: '',
        exercise_name: '',
        sets: '',
        reps: '',
        weight: '',
        exercise_name2: '',
        sets2: '',
        reps2: '',
        weight2: '',
        exercise_name3: '',
        sets3: '',
        reps3: '',
        weigh3t: '',
        user_name: localStorage.getItem("username"),
        user_id: localStorage.getItem("id")
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
        console.log("I am the user", localStorage.getItem("id"))
        return(
            <div>
                <Header as='h2' textAlign='center'> Hello from the new workout form
                </Header>
                <Grid columns={4} padded>
                <Grid.Column width={4}>
                <Form size='small'>
                <Form.Field>
                    <label>Workout Name</label>
                    <input placeholder='Workout Name' 
                     onChange={(e) => this.setState({workout_name: e.target.value}) }/>
                </Form.Field>
                <Form.Field>
                    <label>Short Description</label>
                    <TextArea placeholder='example: Squats, Deadlifts, and Leg Press' 
                     onChange={(e) => this.setState({description: e.target.value}) } />               
                </Form.Field>  
                </Form>              
                </Grid.Column>
                <Grid.Column width={4}>
                    
                <Form size='small'>
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
  
                </Form>
                </Grid.Column>

                <Grid.Column width={4}>

                <Form size='small'>
   
                <Form.Field>
                    <label>Exercise Name</label>
                    <input placeholder='Exercise Name' 
                     onChange={(e) => this.setState({exercise_name2: e.target.value}) }/>
                </Form.Field>
                <Form.Field>
                    <label>Sets</label>
                    <input placeholder='Sets'
                     onChange={(e) => this.setState({sets2: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Reps</label>
                    <input placeholder='Reps' 
                     onChange={(e) => this.setState({reps2: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Weight</label>
                    <input placeholder='Weight' 
                     onChange={(e) => this.setState({weight2: e.target.value}) } />               
                </Form.Field>
                
                </Form>
            
                </Grid.Column>
                <Grid.Column width={4}>

                <Form size='small'onSubmit={this.handleSubmit}>

                <Form.Field>
                    <label>Exercise Name</label>
                    <input placeholder='Exercise Name' 
                     onChange={(e) => this.setState({exercise_name3: e.target.value}) }/>
                </Form.Field>
                <Form.Field>
                    <label>Sets</label>
                    <input placeholder='Sets'
                     onChange={(e) => this.setState({sets3: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Reps</label>
                    <input placeholder='Reps' 
                     onChange={(e) => this.setState({reps3: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Weight</label>
                    <input placeholder='Weight' 
                     onChange={(e) => this.setState({weight3: e.target.value}) } />               
                </Form.Field>
                <Button color='blue' type='submit'>Add Workout</Button> 
                           
                </Form>
                <Button color='red' href='/profile'>Go Back</Button>
                </Grid.Column>                
            
                
                </Grid>
            </div>
        )
    }

}
const NewWorkoutWithRouter = withRouter(NewWorkout)
export default NewWorkoutWithRouter;
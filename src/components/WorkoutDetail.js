import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Table, Button, Grid, Container, Icon} from 'semantic-ui-react'

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
        console.log("now i'm the user in workout detail", localStorage.getItem("name"))
     
        return(
            <div>
                <Grid columns={3} padded>
                <Grid.Column width={4}></Grid.Column>
                <div class='table'>
                <Grid.Column width={8}></Grid.Column>
                   
                    <Table celled striped padded >
                    <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                        Workout Details for {this.props.workout.workout_name}
                    </Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>
                            <Icon name='winner' /> 
                            {this.props.workout.exercise_name}
                            </Table.Cell>
                            <Table.Cell>
                                Sets: {this.props.workout.sets}
                            </Table.Cell>
                            <Table.Cell>
                                Reps: {this.props.workout.reps}
                            </Table.Cell>
                            <Table.Cell>
                                Weight: {this.props.workout.weight}lbs
                            </Table.Cell>                           
                        </Table.Row>

                        <Table.Row>
                        <Table.Cell collapsing>
                            <Icon name='winner' /> 
                            {this.props.workout.exercise_name2}
                            </Table.Cell>
                            <Table.Cell>
                                Sets: {this.props.workout.sets2}
                            </Table.Cell>
                            <Table.Cell>
                                Reps: {this.props.workout.reps2}
                            </Table.Cell>
                            <Table.Cell>
                                Weight: {this.props.workout.weight2}lbs
                            </Table.Cell>                           
                        </Table.Row>                            
                            
                        <Table.Row>
                        <Table.Cell collapsing>
                            <Icon name='winner' /> 
                            {this.props.workout.exercise_name3}
                            </Table.Cell>
                            <Table.Cell>
                                Sets: {this.props.workout.sets3}
                            </Table.Cell>
                            <Table.Cell>
                                Reps: {this.props.workout.reps3}
                            </Table.Cell>
                            <Table.Cell>
                                Weight: {this.props.workout.weight3}lbs
                            </Table.Cell>                           
                        </Table.Row>       
      
                 </Table.Body>
                </Table>

                <Button floated='right' color='blue'onClick={this.handleSubmit}>Add to Plan</Button>
                <Button  floated='left'color='red' href='/profile'> Go Back</Button>
                </div>
                   
                <Grid.Column width={4}></Grid.Column>
                </Grid>
            </div>
        )
    }
}

const WorkoutDetailWithRouter =withRouter(WorkoutDetail)
export default WorkoutDetailWithRouter;

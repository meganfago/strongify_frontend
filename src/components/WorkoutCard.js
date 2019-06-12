import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react'

class WorkoutCard extends Component {
    render(){
        return(
            <div class="card">
                <Card color='blue' centered href={`/workouts/${this.props.workout.id}`} >
               
                <Card.Content>
                    <Card.Header>{this.props.workout.workout_name}</Card.Header>
                    <Card.Meta> Created By: @{this.props.workout.user_name} </Card.Meta>
                    <Card.Description>{this.props.workout.description}</Card.Description>
                </Card.Content>
                </Card>
               
               
            </div>
           
        )
    }
}
const WorkoutCardWithRouter =withRouter(WorkoutCard)
export default WorkoutCardWithRouter;
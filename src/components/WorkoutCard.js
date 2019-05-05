import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class WorkoutCard extends Component {
    render(){
        console.log("This is the workout", this.props.workout)
        return(
            <div>
                <Card.Group>
                <Card>
                <Card.Content>
                    <Card.Header>{this.props.workout.workout_name}</Card.Header>
                    <Card.Meta> Created By: {this.props.workout.user_name} </Card.Meta>
                    <Card.Description>{this.props.workout.description}</Card.Description>
                </Card.Content>
                </Card>
                </Card.Group>
            </div>
        )
    }
}

export default WorkoutCard;
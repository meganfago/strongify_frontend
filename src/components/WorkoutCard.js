import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class WorkoutCard extends Component {
    render(){
        console.log("This is the workout", this.props.workout)
        return(
            <Link to={`/workouts/${this.props.workout.id}`} className="item">
            <div>
            
                <Card centered>
               
                
                <Card.Content>
                    <Card.Header>{this.props.workout.workout_name}</Card.Header>
                    <Card.Meta> Created By: {this.props.workout.user_name} </Card.Meta>
                    <Card.Description>{this.props.workout.description}</Card.Description>
                </Card.Content>
                </Card>
               
            </div>
            </Link>
        )
    }
}

export default WorkoutCard;
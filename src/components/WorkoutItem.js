import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react'



class WorkoutItem extends Component{
    render(){
        
        return(
            <div>
            <Card.Group>
            <Card>
            <Card.Content>
                {/* <Card.Header>{this.props.workout.workout_name}</Card.Header>
                <Card.Meta>Created by: @{this.props.workout.user_name}</Card.Meta>
                <Card.Description>{this.props.workout.description}</Card.Description> */}
            </Card.Content>
            </Card>   
            </Card.Group>    
            </div>
        )
    }
}


const WorkoutItemWithRouter= withRouter(WorkoutItem)
export default WorkoutItemWithRouter;
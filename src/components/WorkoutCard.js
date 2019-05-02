import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class WorkoutCard extends Component {
    render(){
        return(
            <div>
                <Card.Group>
                <Card>
                <Card.Content>
                    <Card.Header>{this.props.workout.name}</Card.Header>
                    <Card.Meta>  </Card.Meta>
                    <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
                </Card.Content>
                </Card>
                </Card.Group>
            </div>
        )
    }
}

export default WorkoutCard;
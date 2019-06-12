import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react'



class PlanItem extends Component{
    render(){
        return(
            <div class='card' >
            
            <Card>
            <Card.Content>
                <Card.Header>{this.props.workout.workout_name}</Card.Header>
                <Card.Meta>Created by: @{this.props.workout.user_name}</Card.Meta>
                <Card.Description>{this.props.workout.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button center basic color='green' href={`/workouts/${this.props.workout.id}`}>
                        Details
                    </Button>
                    </div>
            </Card.Content>
            </Card>   
             
            </div>
        )
    }
}


const PlanItemWithRouter= withRouter(PlanItem)
export default PlanItemWithRouter;
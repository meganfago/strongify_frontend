import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutCard from '../components/WorkoutCard'


import { Grid, Image, Card, Button } from 'semantic-ui-react'

class MainContainer extends Component {
    render(){
        return(
            <div>
             <Grid columns={3} padded>
            <Grid.Column width={3}>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                <Card.Header>Welcome, {this.props.user.name}!</Card.Header>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                 <Card.Content extra>
                 <Button color='blue' size="small" href="/newworkout" > New Workout </Button>
                 <Button color='red' onClick={this.props.logout} href="/" > Logout </Button>
                 </Card.Content>
             </Card>
            </Grid.Column>
            <Grid.Column width={7}>
                {this.props.workouts.map(workout => <WorkoutCard workout={workout}/>)}
                {/* {this.props.workout_exercise.map(we => <WorkoutCard we={we} />)} */}
            </Grid.Column>
            <Grid.Column width={6}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            </Grid>
            </div>
        )
    }
}

const MainContainerWithRouter= withRouter(MainContainer)
export default MainContainerWithRouter;
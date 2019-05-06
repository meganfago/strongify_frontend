import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutCard from '../components/WorkoutCard'
import { Grid, Image, Card, Button } from 'semantic-ui-react'

class MainContainer extends Component {
    render(){
        // console.log("This is my token:", this.props.user_token )
        console.log("this is my user id", this.props.user_id)
        console.log("this is my user", this.props.user)
        console.log("this is my image", this.props.image)
     
        return(
            <div>
             <Grid columns={4} padded divided='vertically'>
             <Grid.Column width={2}></Grid.Column>
             
            <Grid.Column width={3}>
            <Card.Group centered>
            <Card>
            <Image src={this.props.image}/>
                <Card.Content>
                <Card.Header>Welcome, {this.props.user_name}!</Card.Header>
                <Card.Description>@{this.props.user} </Card.Description>
                </Card.Content>
                 <Card.Content extra>
                 <Button color='blue' size="small" href="/workout/new"
                 user_id={this.props.user_id} 
                 user={this.props.user}
                 > New Workout </Button>
                
                 <Button color='teal' size='small' href='/myworkouts' >
                    View My Plans
                 </Button>
                 
                 <Button color='red' onClick={this.props.logout} href="/" > Logout </Button>
                 </Card.Content>
             </Card>
             </Card.Group>
            </Grid.Column>


            <Grid.Column width={9}>
            <Card.Group >
                {this.props.workouts.map(workout => <WorkoutCard workout={workout}/>)}
                </Card.Group>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
         
            </Grid>
            </div>
        )
    }
}

const MainContainerWithRouter= withRouter(MainContainer)
export default MainContainerWithRouter;
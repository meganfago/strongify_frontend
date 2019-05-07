import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutCard from '../components/WorkoutCard'
import { Grid, Image, Card, Button, Header } from 'semantic-ui-react'

class MainContainer extends Component {
    render(){     
        return(
            <div>
             <Grid columns={4} padded divided='vertically'>
             <Grid.Column width={2}></Grid.Column>
             
            <Grid.Column width={3}>
            <Card.Group centered>
            <Card>
            <Image src={localStorage.getItem("image")}/>
                <Card.Content>
                <Card.Header>Welcome, {localStorage.getItem("name")}!</Card.Header>
                <Card.Description>@{localStorage.getItem("username")} </Card.Description>
                </Card.Content>
                 <Card.Content extra>
                 <Button color='blue' size="small" href="/workout/new"
                 user_id={localStorage.getItem("id")} 
                 user={localStorage.getItem("username")}
                 > New Workout </Button>
                
                 <Button color='teal' size='small' href='/myworkouts'
                  >
                    View My Workouts
                 </Button>
                 
                 <Button color='red' onClick={this.props.logout} href="/" > Logout </Button>
                 </Card.Content>
             </Card>
             </Card.Group>
            </Grid.Column>


            <Grid.Column width={9}>
            <Header textAlign='center'> All Workouts </Header>
            <Card.Group centered>
                
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
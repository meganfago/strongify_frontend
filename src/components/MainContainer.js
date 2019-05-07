import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutCard from '../components/WorkoutCard'
import { Grid, Card, Header, Menu, Image } from 'semantic-ui-react'

class MainContainer extends Component {
    render(){     
        return(
            <div class='menu'>
            <Grid columns={4} padded divided='vertically'>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={3}>
            
            <Image src={localStorage.getItem("image")} size='tiny' circular centered />
            <Header as='h3' textAlign='center'> Welcome, {localStorage.getItem("name")}!</Header>
            <p align="center">@{localStorage.getItem("username")}</p>
            <Menu vertical>

                <Menu.Item href="/workout/new">
                    Create a New Workout
                </Menu.Item>

                <Menu.Item href='/myworkouts' target='_blank'>
                 View My Plans
                </Menu.Item>

                <Menu.Item href='/createdbyuser'>
                    Workouts Created by Me
                </Menu.Item>

                <Menu.Item color='red' onClick={this.props.logout} href="/">
                    Logout
                </Menu.Item>

                </Menu>
                </Grid.Column>
           

                {/* All Workouts display */}
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
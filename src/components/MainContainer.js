import React, { Component } from 'react';
import { Grid, Image, Card, Icon, Button } from 'semantic-ui-react'

class MainContainer extends Component {
    render(){
        return(
            <div>
                {/* <Menu secondary>
                <Menu.Menu position='right'>
                <Menu.Item
                name='logout'
                onClick={this.props.logout}
                />
                </Menu.Menu>
                </Menu> */}
                <h2>Hello from the main container</h2>
                <Grid columns={3} padded>
            <Grid.Column width={3}>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                 <Card.Meta>
                <span className='date'>Joined in 2015</span>
                 </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                 <Card.Content extra>
                 <a> <Icon name='user' /> 22 Friends</a>
                 <Button basic color='green' onClick={this.props.logout}> Logout </Button>
                 </Card.Content>
             </Card>
            </Grid.Column>
            <Grid.Column width={7}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column width={6}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default MainContainer;
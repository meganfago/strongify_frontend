import React, { Component } from 'react'
import { Grid, Image, Button, Container} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';


class HomePage extends Component {
  
    render(){
        return(
            <div>
                <Grid columns={3} padded>
                <Grid.Column width={5}></Grid.Column>
                <Grid.Column width={6}>
                <Container textAlign='center'>
                <Image src={require('../images/Strongify.png')} />
                <Button fluid size='massive' href="/login">Get Started</Button>
                </Container>
                </Grid.Column>
                <Grid.Column width={7}></Grid.Column>
                </Grid>
                  
            </div>
        )
    }
}

const HomePageWithRouter = withRouter(HomePage)
export default HomePageWithRouter;
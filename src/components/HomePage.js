import React, { Component } from 'react'
import { Grid, Image, Button} from 'semantic-ui-react'
// import Strongify from './src/components/Strongify'

import { withRouter } from 'react-router-dom';


class HomePage extends Component {
  
    render(){
        return(
            <div>
                <Grid columns={3} padded>
                <Grid.Column width={6}></Grid.Column>
                <Grid.Column width={5}>
                {/* <Image src={Strongify} /> */}
                <Button size='massive' href="/login">Get Started</Button>
                </Grid.Column>
                <Grid.Column width={6}></Grid.Column>
                </Grid>
                  
            </div>
        )
    }
}

const HomePageWithRouter = withRouter(HomePage)
export default HomePageWithRouter;
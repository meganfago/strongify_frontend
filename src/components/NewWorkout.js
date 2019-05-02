import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'

class NewWorkout extends Component {
    render(){
        return(
            <div>
                <Grid columns={3} padded>
                <Grid.Column width={5}></Grid.Column>
                <Grid.Column width={6}>
                    <h2> Hello from the new workout form </h2>
                </Grid.Column>
                <Grid.Column width={5}></Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default NewWorkout
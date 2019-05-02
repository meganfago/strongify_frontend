import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
    render(){
        return(
            <div>
                <h2>hello from the homepage</h2>
            </div>
        )
    }
}

const HomePageWithRouter = withRouter(HomePage)
export default HomePageWithRouter;
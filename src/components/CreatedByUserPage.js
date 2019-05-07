import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CreatedByUserPage extends Component {

    state = {
        my_workouts: []
    }

    // fetchUserWorkouts = () => {
    //     fetch('http://localhost:3000/createdbyuser', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify({user_id: this.props.user_id})
    //         })
    //         .then(resp => resp.json())
    //         .then(data => this.setState({
    //            my_workouts: data.workouts
    //         }))
    //     }
    render(){
        
        return(
            <div>
                <h3>hello from the created by user page</h3>
            </div>
        )
    }
}

const CreatedByUserPageWithRouter= withRouter(CreatedByUserPage)
export default CreatedByUserPageWithRouter;
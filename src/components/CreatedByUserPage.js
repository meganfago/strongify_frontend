import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutItem from './WorkoutItem'

class CreatedByUserPage extends Component {

    state = {
        my_workouts: []
    }

    componentDidMount(){
        this.fetchUserWorkouts()
    }

    fetchUserWorkouts = () => {
        fetch(`http://localhost:3000/users/${localStorage.getItem("id")}`)
            .then(resp => resp.json())
            .then(data => console.log("this is in created by user", data))
        }
    render(){
        
        return(
            <div>
                {/* {this.state.my_workouts.map(workout => <WorkoutItem workout={workout}/>)} */}
            </div>
        )
    }
}

const CreatedByUserPageWithRouter= withRouter(CreatedByUserPage)
export default CreatedByUserPageWithRouter;
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class PlanItem extends Component{

    render(){
        console.log(this.props.workouts)

        // const workout = this.props.user_workout.id === this.props.workout.id ? this.props.workout : null;
        return(
            
            <div>
                <ul>
                    <li>
                        <h2>hello</h2>
                        
                    </li>
                </ul>
                
            </div>
        )
    }
}


const PlanItemWithRouter= withRouter(PlanItem)
export default PlanItemWithRouter;
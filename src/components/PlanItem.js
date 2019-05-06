import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { Button } from 'semantic-ui-react'



class PlanItem extends Component{

    render(){

        return(
            
            <div>
                 <h2>{this.props.workout.workout_name}</h2>
                <ul>
                    <li>
                         Sets: {this.props.workout.sets}
                    </li>
                       
                        <li>
                          Description:  {this.props.workout.description}
                        </li>
                        
                    
                </ul>
                
                {/* <Button content='Go Back To Profile' color='blue' size='big' href="/profile" /> */}
            </div>
        )
    }
}


const PlanItemWithRouter= withRouter(PlanItem)
export default PlanItemWithRouter;
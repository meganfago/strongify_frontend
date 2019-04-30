import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import API from '../services/Backend'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
      'Content-Type' : 'application-json'
      }, 
      body: JSON.stringify(this.state)
    }).then(resp => resp.json())
    .then(payload => {
      localStorage.setItem("token", payload.token)
      localStorage.setItem("username", payload.username)
      this.props.updateUser(payload)
      this.props.history.push("/profile")
    })
    // need to update state with new user
    // how to handle failed log in?
  }
    render(){
        return(
            <div>
            <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
              
              <Form onSubmit={this.handleSubmit}>
                <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' 
                onChange={(e) => this.setState({username: e.target.value}) } />
                <Form.Input icon='lock' iconPosition='left' label='Password' type='password'
                onChange={(e) => this.setState({password: e.target.value}) } />
                <Button content='Login' primary />
              </Form>

            </Grid.Column>

                <Grid.Column verticalAlign='middle'>

                <Button content='Sign up' icon='signup' size='big' />

                </Grid.Column>
            </Grid>
            <Divider vertical>Or</Divider>
            </Segment>
               
            </div>
        )
    }
}
console.log(Login)
const LoginWithRouter = withRouter(Login)
console.log(LoginWithRouter)

export default LoginWithRouter;
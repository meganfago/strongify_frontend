import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Segment, Grid } from 'semantic-ui-react'

class Signup extends Component {

    state = {
        name: '', 
        username: '',
        email: '', 
        password: '',
        image:''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/users`, {
          method: 'POST',
          headers: {
          'Content-Type' : 'application/json'
          }, 
          body: JSON.stringify(this.state)
        }).then(resp => resp.json())
        .then(user => {
          this.props.updateUser(user)
        })
          event.target.reset()
          this.props.history.push("/login")
        }
      

    render(){
        return(
            <div>
                <Grid columns={3} padded>
                <Grid.Column width={6}></Grid.Column>
                <Grid.Column width={4}>
            <Segment compact>
            <h2>Sign Up</h2>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' 
                     onChange={(e) => this.setState({name: e.target.value}) }/>
                </Form.Field>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username'
                     onChange={(e) => this.setState({username: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type='email'
                     onChange={(e) => this.setState({email: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    <input placeholder='Image URL' 
                     onChange={(e) => this.setState({image: e.target.value}) } />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type='password'
                     onChange={(e) => this.setState({password: e.target.value}) } />
                </Form.Field>
            <Button type='submit'>Submit</Button>
            </Form>
            </Segment>
            </Grid.Column>
            <Grid.Column width={6}></Grid.Column>
            </Grid>
            </div>
        )
    }
}

const SignUpWithRouter = withRouter(Signup)
export default SignUpWithRouter;
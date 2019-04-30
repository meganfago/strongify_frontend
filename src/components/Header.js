import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react'

class Header extends Component {
    render(){
        return(
            <div>
             <Menu secondary>
             <Menu.Item>
             <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/200/woman-weight-lifting_1f3cb-fe0f-200d-2640-fe0f.png"/>
        </Menu.Item>
        <Menu.Item name='home' />
        <Menu.Item
          name='messages'
        //   active={activeItem === 'messages'}
        //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
        //   active={activeItem === 'friends'}
        //   onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            // active={activeItem === 'logout'}
            // onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
            </div>
        )
    }
}

export default Header;
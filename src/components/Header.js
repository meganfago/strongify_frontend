import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class Header extends Component {
    render(){
        return(
            <div>
             <Menu secondary>
             <Menu.Item>
             <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/200/woman-weight-lifting_1f3cb-fe0f-200d-2640-fe0f.png"/>
              </Menu.Item>  
              <Menu.Item>
              <h3>Strongify</h3>
              </Menu.Item> 
              </Menu>
          </div>
        )
    }
}

export default Header;


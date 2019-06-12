import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react'

class Header extends Component {
    render(){
        return(
            <div class='heading'>
             <Menu secondary>
             <Menu.Item>
              
             <img src={require('../images/icon.png')}/>
            
              </Menu.Item>  
              <Menu.Item>
              <h3 class='header'>Strongify</h3>
              </Menu.Item> 
              </Menu>
          </div>
        )
    }
}

export default Header;


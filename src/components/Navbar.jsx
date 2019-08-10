import React, { Component } from 'react'
import { Menu, Responsive, Button } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state
    const divStyle = {
        position: 'relative',
        zIndex: '100',
        boxShadow: 'none',
      };

    return (
      <div>
        
        <Responsive as={Menu}  borderless size="massive" pointing inverted secondary style={divStyle} >
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='About us'
            active={activeItem === 'About us'}
            onClick={this.handleItemClick}
          />

            <Menu.Menu position='right'>
                <Button size='big' basic inverted color='white'><strong> Contact us</strong></Button>
            </Menu.Menu>
         
        </Responsive>
        

      </div>
    )
  }
}

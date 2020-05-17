import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import './Menu2.css';

export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='small' className="menubar">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Apps'>
            <Dropdown.Menu>
              <Dropdown.Item>Budgets!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Games'>
            <Dropdown.Menu>
              <Dropdown.Item>Go</Dropdown.Item>
              <Dropdown.Item>Poker</Dropdown.Item>
              <Dropdown.Item>Quantum Nim</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='P5.js'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}
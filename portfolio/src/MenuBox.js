import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleHeaderVertical extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Web Apps</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Budgets'
              active={activeItem === 'Budgets'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='consumer'
              active={activeItem === 'consumer'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Games</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Poker'
              active={activeItem === 'poker'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Go'
              active={activeItem === 'go'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Quantum Nim'
              active={activeItem === 'quantumnim'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Machine Learning</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Reinforcement Learning'
              active={activeItem === 'drl'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Images'
              active={activeItem === 'images'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}

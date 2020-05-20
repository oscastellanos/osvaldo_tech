import React, {Component} from 'react'

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  Icon,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Card
} from 'semantic-ui-react'
import { Route, Switch, Link } from "react-router-dom";

import favi from './favicon-32x32.png';


const AppPage = () => (
  <div>
        <Menu fixed='top' inverted>
        <Container>
            {/* <Menu.Item as='a' header>
            <Image size='mini' src='/apple-touch-icon.png' style={{ marginRight: '1.5em' }} />
            osvaldo.tech
            </Menu.Item> */}
            <Menu.Item>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item active>
                <Link to="/">Apps</Link>
            </Menu.Item>
            {/* <Dropdown item simple text='Apps'>
            <Dropdown.Menu active>
                <Dropdown.Item>Budget!</Dropdown.Item>
                <Dropdown.Item>ToDo</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item> 
            </Dropdown.Menu>
            </Dropdown> */}
        </Container>
        </Menu>

        {/* <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Full Stack Development
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src={favi} />
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Machine Learning Projects
                </Header>
                <p style={{ fontSize: '1.33em' }}>NLP, RL, and CV!</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> */}

        <Container text style={{ marginTop: '7em' }}>
        {/* <Header as='h1'>The Apps</Header> */}
        {/* <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
            A text container is used for the main container, which is useful for single column layouts.
        </p> */}
        <Card.Group itemsPerRow={2}>
          <Card>
            <Card.Content>
              <Card.Header>Budgets!</Card.Header>
              <Card.Meta>
                <span className='date'>Hosted on Heroku</span>
              </Card.Meta>
              <Card.Description>
              A web application that allows users to add revenue streams and monthly expenses, which allows them to easily calculate and visualize budgets.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://budgets-1.herokuapp.com/" target="_blank">
                <Icon name='external' />
                See it deployed
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>ToDo</Card.Header>
              <Card.Meta>
                <span className='date'></span>
              </Card.Meta>
              <Card.Description>
                I've been on the hunt for the perfect To Do tasking system for a few years now. I'm taking a stab at making one that will work for my specific workflows.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              {/* <a> */}
                <Icon name='spinner' />
                In Progress
              {/* </a> */}
            </Card.Content>
          </Card>
        </Card.Group>
        

        
        </Container>

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              {/* <Header inverted as='h4' content='Contact Me' /> */}
              <List link inverted>
                <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>Austin, TX</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='phone' />
                  <List.Content>(512) 400-8604</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>
                    <a href='mailto:dev@osvaldo.tech'>dev@osvaldo.tech</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              {/* <Header inverted as='h4' content='Research' />
              <List link inverted>
                <List.Item as='a'>Deep Reinforcement Learning</List.Item>
                <List.Item as='a'>Natural Language Processing</List.Item>
                <List.Item as='a'>Computer Vision</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List> */}
            </Grid.Column>
            <Grid.Column width={4}>
              {/* <Header as='h4' inverted>
                Last but not least, 
              </Header>
              <p>
                Stay safe!
              </p> */}
              <List horizontal>
                <List.Item>
                  <List.Icon name='github' />
                  <List.Content>
                  <a href="https://github.com/oscastellanos" target="_blank" >oscastellanos</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='twitter' />
                  <List.Content>
                  <a href="https://twitter.com/castellanos_os" target="_blank" >@castellanos_os</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkedin'/>
                  <List.Content>
                    <a href="https://www.linkedin.com/in/osvaldo-castellanos/" target="_blank" >osvaldo-castellanos</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted section />
        <Image centered size='mini' src='/apple-touch-icon.png' />
        {/* <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List> */}
      </Container>
    </Segment>
  </div>
)

export default AppPage
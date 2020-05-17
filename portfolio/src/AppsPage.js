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
  Visibility
} from 'semantic-ui-react'
import { Route, Switch, Link } from "react-router-dom";

import logo from './android-chrome-512x512.png';


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

            <Dropdown item simple text='Apps'>
            <Dropdown.Menu active>
                <Dropdown.Item>Budget!</Dropdown.Item>
                <Dropdown.Item>ToDo</Dropdown.Item>
                {/* <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item> */}
            </Dropdown.Menu>
            </Dropdown>
        </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Semantic UI React Fixed Template</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
            A text container is used for the main container, which is useful for single column layouts.
        </p>

        <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        </Container>

        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Contact Me</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>APIs</List.Item>
                <List.Item as='a'>Data Science</List.Item>
                <List.Item as='a'>Deep Learning</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Last but not least, 
              </Header>
              <p>
                Stay safe!
              </p>
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
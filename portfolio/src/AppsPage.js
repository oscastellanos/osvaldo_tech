import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Card
} from 'semantic-ui-react'
import { Route, Switch, Link } from "react-router-dom";
import build from './Build.png';
import logo from './android-chrome-512x512.png';
import favi from './favicon-32x32.png';


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='osvaldo.tech'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    > <Image avatar src={logo} />
    </Header>
    <Header
      as='h1'
      content='osvaldo.tech'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '.5em' : '1.5em',
      }}
    //   style={{
    //     fontSize: mobile ? '1.5em' : '1.7em',
    //     fontWeight: 'normal',
    //     marginTop: mobile ? '0.5em' : '1.5em',
    //   }}
    />
    {/* <Button primary size='huge'>
      Lets see some work
      <Icon name='right arrow' />
    </Button> */}
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 50, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item >
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/apps" active>Apps</Link>
                </Menu.Item>
                {/* <Menu.Item as='a'>Games</Menu.Item>
                <Menu.Item as='a'>Javascript</Menu.Item> */}
                
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a'>
            Home
          </Menu.Item>
          <Menu.Item as='a' active>Apps</Menu.Item>
          {/* <Menu.Item as='a'>Games</Menu.Item>
          <Menu.Item as='a'>Javascript</Menu.Item> */}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const AppPage = () => (
  <ResponsiveContainer>
        {/* <Menu fixed='top' inverted>
        <Container>
            <Menu.Item>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item active>
                <Link to="/">Apps</Link>
            </Menu.Item>
        </Container>
        </Menu> */}
    <Segment style={{ padding: '3em 0em' }} vertical>
        <Container text style={{ marginTop: '7em' }}>
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
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container >
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
  </ResponsiveContainer>
)

export default AppPage
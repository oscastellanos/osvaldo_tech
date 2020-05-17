import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleButton from './Btn.js';
import MenuExampleHeaderVertical from './MenuBox.js';
import { Container, Grid, Segment, Image  } from 'semantic-ui-react';
import { Route, Switch, Link } from "react-router-dom";
import MenuExampleSizeSmall from './Menu2.js';
import HomepageLayout from './Homepagelayout.js';
import AppPage from './AppsPage.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomepageLayout}/>
        <Route path="/apps" component={AppPage}/>
      </Switch>
    </div>
  );
}

export default App;

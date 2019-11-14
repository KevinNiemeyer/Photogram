import React from 'react';
import HeaderComponent from './components/Header/HeaderComponent';
import LandingPage from './pages/Landing/LandingPage';
import UserPage from './pages/User/UserPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './reset.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className='app-container'>
            <HeaderComponent />
            <Route path='/' exact component={LandingPage} />
            <Route path='/user/:userName' component={UserPage} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

//<LandingPage photos={this.state.photos} />

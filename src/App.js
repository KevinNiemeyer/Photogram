import React from 'react';
import HeaderComponent from './components/Header';
import LandingPage from './pages/Landing';
import UserPage from './pages/User';
import UserSearch from './pages/Search/UserSearch';
import CollectionsSearch from './pages/Search/CollectionsSearch';
import NoMatch from './pages/Search/NoMatch';

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
            <Route path='/user/:userName' exact component={UserPage} />
            <Route path='/search/user/:user' exact component={UserSearch} />
            <Route path='/search/nomatch/:user' exact component={NoMatch} />
            <Route
              path='/search/collections/:collection'
              exact
              component={CollectionsSearch}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

//<LandingPage photos={this.state.photos} />

import React from 'react';
import HeaderComponent from './components/Header';
import LandingPage from './pages/Landing';
import UserPage from './pages/User';
import UserSearch from './pages/Search/UserSearch';
import CollectionsSearch from './pages/Search/CollectionsSearch';
import Collection from './pages/Collection';
import PhotoSearch from './pages/Search/PhotoSearch';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './reset.css';

const FourOhFour = () => <div>Not Found</div>;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className='app-container'>
            <HeaderComponent />
            <div className='routes-container'>
              <Route path='/' exact component={LandingPage} />
              <Route path='/user/:userName' exact component={UserPage} />
              <Route path='/search/user/:user' exact component={UserSearch} />
              <Route
                path='/search/collections/:collection'
                exact
                component={CollectionsSearch}
              />
              <Route path='/collection/:id' exact component={Collection} />
              <Route
                path='/search/photos/:searchTerm'
                exact
                component={PhotoSearch}
              />
              <Route path='*' component={FourOhFour} />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

//<LandingPage photos={this.state.photos} />

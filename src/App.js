import React from 'react';
import HeaderComponent from './components/Header';
import LandingPage from './pages/Landing';
import UserPage from './pages/User';
import UserSearch from './pages/Search/UserSearch';
import CollectionsSearch from './pages/Search/CollectionsSearch';
import Collection from './pages/Collection';
import PhotosSearch from './pages/Search/PhotosSearch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './reset.css';

const FourOhFour = () => <div>Not Found</div>;

export const LayoutContext = React.createContext();

class App extends React.Component {
  state = {
    isRow: true
  }

  toggleRow = () => this.setState({ isRow: !this.state.isRow })

  render() {
    return (
      <LayoutContext.Provider value={{ isRow: this.state.isRow, toggleRow: this.toggleRow }}>
        <Router>
          <div className='app-container'>
            <HeaderComponent />
            <div className='routes-container'>
              <Switch>
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
                  component={PhotosSearch}
                />
                <Route path='*' component={FourOhFour} />
              </Switch>
            </div>
          </div>
        </Router>
      </LayoutContext.Provider>
    );
  }
}

export default App;


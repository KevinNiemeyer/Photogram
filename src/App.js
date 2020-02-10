import React from 'react';
import HeaderComponent from './components/Header';
import LandingPage from './pages/Landing';
import UserPage from './pages/User';
import UserSearch from './pages/Search/UserSearch';
import CollectionsSearch from './pages/Search/CollectionsSearch';
import Collection from './pages/Collection';
import PhotosSearch from './pages/Search/PhotosSearch';
import Favorites from './pages/Favorites';
import GoToTop from './components/GoToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './reset.css';

const FourOhFour = () => <div>Not Found</div>;

export const LayoutContext = React.createContext();

class App extends React.Component {
  //state for grid/list/column view
  state = {
    isGrid: true,
    isList: false,
    isColumn: false
  };

  toggleView = e => {
    //get current values from state and copy it
    const currentValues = { ...this.state }; //spread the state object
    //set all copied state values to false
    Object.keys(currentValues).forEach(prop => {
      currentValues[prop] = false;
    });
    const gridSettings = {
      //paste copy back into state & update the current target.value
      ...currentValues, //spread the object
      [e.target.name]: true
    };
    this.setState(gridSettings);

    localStorage.setItem('gridSettings', JSON.stringify(gridSettings));
  };

  componentDidMount() {
    const gridSettings = localStorage.getItem('gridSettings');
    if (gridSettings) this.setState(JSON.parse(gridSettings));
  }

  render() {
    return (
      <LayoutContext.Provider
        value={{
          isGrid: this.state.isGrid,
          isList: this.state.isList,
          isColumn: this.state.isColumn,
          toggleView: this.toggleView
        }}>
        <Router>
          <div className='app-container'>
            <GoToTop />
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
                <Route path='/favorites' exact component={Favorites} />
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

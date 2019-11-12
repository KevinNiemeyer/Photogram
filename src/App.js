import React from 'react';
import HeaderComponent from './components/Header/HeaderComponent';
import LandingPage from './pages/Landing/LandingPage';
import UserPage from './pages/User/UserPage';
import Unsplash, { toJson } from 'unsplash-js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './reset.css';

class App extends React.Component {
  state = {
    photos: []
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getData();
    }
  }

  getData() {
    const unsplash = new Unsplash({
      accessKey:
        'deeaf0db05cb33f1ce444c03c075d393261f1f5789c4cb94cdeeef9b1e020fa4'
    });

    unsplash.photos
      .listPhotos(2, 15, 'latest')
      .then(toJson)
      .then(json => {
        //  console.log(json);
        this.setState({
          photos: json
        });
      });
  }
  render() {
    return (
      <Router>
        <Switch>
          <div className='app-container'>
            <HeaderComponent />
            <Route path='/user' component={UserPage} />
            <LandingPage photos={this.state.photos} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

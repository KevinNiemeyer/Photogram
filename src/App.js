import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import './App.css';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className='app-container'>
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;

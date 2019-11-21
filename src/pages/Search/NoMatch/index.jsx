import React, { Component } from 'react';
import './NoMatch.css';

export default class NoMatch extends Component {
  render() {
    return (
      <div className='no-match-heading'>
        No results for "{this.props.category}"
      </div>
    );
  }
}

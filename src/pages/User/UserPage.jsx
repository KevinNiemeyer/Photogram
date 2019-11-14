import React, { Component } from 'react';
import { toJson } from 'unsplash-js';

import './UserStyles.css';

import { unsplash } from '../../unsplash';

class UserPage extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.getData();
    console.log(this.props);
  }

  getData() {
    unsplash.users
      .photos(this.props.match.params.userName, 1, 10, 'popular', false)
      .then(toJson)
      .then(json => {
        console.log(json);
      });
  }

  render() {
    console.log(this.props.match.params.userId);
    return (
      <div>
        <h1>User: </h1>
      </div>
    );
  }
}

export default UserPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';

import './UserSearchStyles.css';
import { unsplash } from '../../../unsplash';

export class UserSearch extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getData(this.props.match.params.user);
  }

  getData(user) {
    unsplash.search
      .users(user, 1)
      .then(toJson)
      .then(json => {
        this.setState({ users: json.results });
        console.log(json);
      });
  }
  render() {
    const { users } = this.state;
    if (!{ users }) return null;
    return (
      <div className='user-search-results'>
        {users.map(user => {
          return (
            <Link
              className='user-search-link-name'
              to={`/user/${this.props.match.params.user.username}`}
              style={{ textDecoration: 'none' }}>
              {user.username}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default UserSearch;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';

import './UserSearchStyles.css';
import { unsplash } from '../../../unsplash';

export class UserSearch extends Component {
  state = {
    users: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  getData = () => {
    unsplash.search
      .users(this.props.match.params.user, 1)
      .then(toJson)
      .then(json => {
        this.setState({
          users: json.results
        });
      });
  };
  render() {
    const { users } = this.state;
    if (!this.state.users.length) return null;
    return (
      <div className='user-search-page'>
        <p className='user-search-heading'>
          Search results for "{this.props.match.params.user}"
        </p>
        <div className='user-search-results'>
          {users.map(user => {
            return (
              <Link
                className='user-search-link'
                id={user.id}
                to={`/user/${user.username}`}
                style={{ textDecoration: 'none' }}>
                <img src={user.profile_image.medium} alt={user.p} />
                <p>{user.username}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserSearch;

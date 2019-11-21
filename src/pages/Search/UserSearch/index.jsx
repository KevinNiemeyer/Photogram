import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import NoMatch from '../NoMatch/';

import './UserSearchStyles.css';
import { unsplash } from '../../../unsplash';

export class UserSearch extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getData(this.props.match.params.user);
    console.log(this.props.match.params);
  }

  componentDidUpdate() {
    this.getData(this.props.match.params.user);
  }

  getData(user) {
    unsplash.search
      .users(user, 1)
      .then(toJson)
      .then(json => {
        this.setState({ users: json.results });
      });
  }
  render() {
    const { users } = this.state;
    if (this.state.users.length === 0) {
      return <NoMatch category={this.props.match.params.user} />;
    }
    return (
      <div className='user-search-results'>
        <p className='user-search-heading'>
          Search results for "{this.props.match.params.user}"
        </p>
        <div className='user-search-results-container'>
          {users.map(user => {
            return (
              <Link
                className='user-search-link-name'
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

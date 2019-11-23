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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.user !== this.props.match.params.user) {
      this.getData(this.props.match.params.user);
    }
  }

  getData(user) {
    this.setState({ loading: true });
    unsplash.search
      .users(user, 1)
      .then(toJson)
      .then(json => {
        const results = json.results;
        if (!results.length) {
          this.setState({ loading: false });
          return this.props.history.push('/not-found');
        }

        this.setState({ users: results, loading: false });
      });
  }
  render() {
    const { users } = this.state;
    if (this.state.users.length === 0 && !this.state.loading) {
      return <NoMatch category={this.props.match.params.user} />;
    }
    if (this.state.loading) return <div>Loading</div>;
    return (
      <div className='user-search-results'>
        <p className='user-search-heading'>
          Search results for "{this.props.match.params.user}"
        </p>
        <div className='user-search-results-container'>
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

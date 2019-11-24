import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';

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
      .users(this.props.match.params.user, this.state.page)
      .then(toJson)
      .then(json => {
        this.setState({
          users: json.results,
          page: this.state.page + 1,
          hasMore: !!json.results.length
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
          <InfiniteScroll
            pageStart={1}
            loadMore={this.getData}
            loader={
              <div className='loader' key={0}>
                Loading ...
              </div>
            }>
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
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default UserSearch;

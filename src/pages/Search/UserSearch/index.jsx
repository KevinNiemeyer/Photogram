import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import styled from 'styled-components';
import { unsplash } from '../../../unsplash';
import InfiniteScroll from 'react-infinite-scroller';

const Loader = styled.div``;

const Container = styled.div`
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  padding: 20px 0 0 20px;
`;

const Results = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 100%;
  padding: 20px;
  text-decoration: none;
  padding: 20px;
  &:hover {
    opacity: 0.8;
  }
`;
const LinkTitle = styled.div`
  padding: 10px;
  font-size: 20px;
  color: rgb(247, 154, 120);
  text-align: center;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const linkStyle = {
  textDecoration: 'none'
};

const SearchTerm = styled.span`
  color: rgb(247, 154, 120);
`;

export class UserSearch extends Component {
  state = {
    users: [],
    page: 1,
    hasMore: true,
    user: ''
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.search
      .users(this.props.match.params.user, this.state.page, 5)
      .then(toJson)
      .then(json => {
        if (!json.results.length) {
          return this.setState({ hasMore: false });
        }
        this.setState(state => {
          const newState = {
            users: [...state.users, ...json.results],
            page: state.page + 1,
            user: state.user
          };
          if (!state.totalPages) {
            newState.totalPages = json.total_pages;
          }
          if (newState.page === state.totalPages) {
            newState.hasMore = false;
          }
          return newState;
        });
      });
  };

  render() {
    const { users } = this.state;

    return (
      <Container id='user-search-container'>
        <Heading>
          Search results for{' '}
          <SearchTerm>{this.props.match.params.user}</SearchTerm> in Users:
        </Heading>
        <InfiniteScroll
          pageStart={1}
          loadMore={this.getData}
          hasMore={this.state.hasMore}
          loader={<Loader key={0}>Loading ...</Loader>}>
          <Results id='user-search-results'>
            {users.map(user => {
              return (
                <LinkContainer id='user-search-link-container'>
                  <Link
                    category='user'
                    id={user.id}
                    to={`/user/${user.username}`}
                    style={linkStyle}>
                    <LinkTitle>{user.username}</LinkTitle>
                    <Img src={user.profile_image.medium} alt={user.p} />
                  </Link>
                </LinkContainer>
              );
            })}
          </Results>
        </InfiniteScroll>
      </Container>
    );
  }
}

export default UserSearch;

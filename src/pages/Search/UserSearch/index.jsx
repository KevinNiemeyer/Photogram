import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import styled from 'styled-components';
import { unsplash } from '../../../unsplash';

const Container = styled.div`
  background-color: rgb(250, 250, 250);
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
  flex-direction: column;
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

export class UserSearch extends Component {
  state = {
    users: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.search
      .users(this.props.match.params.user, 1, 5)
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
      <Container id='user-search-container'>
        <Heading>Search results for "{this.props.match.params.user}"</Heading>
        <Results id='user-search-results'>
          {users.map(user => {
            return (
              <LinkContainer id='user-search-link-container'>
                <Link
                  category='user'
                  id={user.id}
                  to={`/user/${user.username}`}
                  style={{ textDecoration: 'none' }}>
                  <LinkTitle>{user.username}</LinkTitle>
                  <Img src={user.profile_image.medium} alt={user.p} />
                </Link>
              </LinkContainer>
            );
          })}
        </Results>
      </Container>
    );
  }
}

export default UserSearch;

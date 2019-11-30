import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  background-color: rgb(247, 154, 120);
  padding: 10px 0 7px 10px;
  color: lightgrey;
  margin-top: 20px;
  &t:hover img {
    cursor: pointer;
  }
  &:hover Name {
    opacity: 0.8;
  }
  &:active img {
    transform: scale(0.9);
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  color: purple;
  text-decoration: none;
`;

const Img = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

class UserLink extends Component {
  render() {
    return (
      <Container>
        <Name>
          <Link
            to={`/user/${this.props.photo.user.username}`}
            style={{ textDecoration: 'none' }}>
            <Img
              alt={this.props.photo.description}
              src={this.props.photo.user.profile_image.small}
            />
            {this.props.photo.user.name}
          </Link>
        </Name>
      </Container>
    );
  }
}

export default UserLink;

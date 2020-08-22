import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
`;

const Img = styled.img`
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--third-color);
  display: flex;
  align-items: center;
  padding-left: 5px;
  font-size: 20px;
`;

const pStyle = {
  paddingLeft: '10px',
};

class UserLink extends Component {
  render() {
    return (
      <LinkContainer id='userlink-container'>
        <StyledLink id='userlink-link' to={`/user/${this.props.user.username}`}>
          <Img
            id='userlink-image'
            alt={this.props.user.name}
            src={this.props.user.profile_image.small}
          />
          <p style={pStyle}>{this.props.user.name}</p>
        </StyledLink>
      </LinkContainer>
    );
  }
}

export default UserLink;

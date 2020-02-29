import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;

  ${props =>
    props.isList &&
    css`
      margin-left: 20px;
      width: auto;
    `}
  &:hover img {
    opacity: 0.8;
  }
  &:active img {
    transform: scale(0.9);
  }
`;

const Img = styled.img`
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(247, 154, 120);
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const pStyle = {
  paddingLeft: "10px"
};

class UserLink extends Component {
  render() {
    console.log(this.props);
    return (
      <LinkContainer isList={this.props.isList} id="userlink-container">
        <StyledLink id="userlink-link" to={`/user/${this.props.user.username}`}>
          <Img
            id="userlink-image"
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

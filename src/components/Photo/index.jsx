import React, { Component } from 'react';
import styled from 'styled-components';
import UserLink from '../UserLink/index.jsx';

const Container = styled.div`
  width: 25%;
  margin: 0 auto;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

class LandingPhotoComponent extends Component {
  render() {
    return (
      <Container>
        <UserLink photo={this.props.photo} />
        <Img
          src={this.props.photo.urls.small}
          alt={this.props.photo.alt_description}
        />
      </Container>
    );
  }
}

export default LandingPhotoComponent;

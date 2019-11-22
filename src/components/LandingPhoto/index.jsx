import React, { Component } from 'react';
import styled from 'styled-components';
import UserLink from '../UserLink/index.jsx';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
`;

const Img = styled.img`
 width: 100%;
 opacity: ${props => props.isLoaded ? '1' : '0'};
 transition: 0.5s ease-in-out;
 position: absolute;
 top: 0;
 left: 0;
`;

const Preloader = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56%;
  background: ${props => props.color};
  position: relative;
`;

class LandingPhotoComponent extends Component {
  state = {
    isLoaded: false
  }

  handleLoading = () => this.setState({ isLoaded: true })
  render() {
    const ratio = (this.props.photo.width / this.props.photo.height) * 100
    return (
      <Container>
        <Preloader ratio={ratio} color={this.props.photo.color}>
          <Img
            src={this.props.photo.urls.small}
            alt={this.props.photo.alt_description}
            onLoad={this.handleLoading}
            isLoaded={this.state.isLoaded}
          />
        </Preloader>
        <UserLink photo={this.props.photo} />
      </Container>
    );
  }
}

export default LandingPhotoComponent;

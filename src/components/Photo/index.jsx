import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Modal';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.landscape
      ? css`
          width: 100%;
        `
      : css`
          height: 100%;
        `}
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
`;

class Photo extends Component {
  state = {
    show: false
  };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Container id='photo-container'>
        {this.props.isRow ? (
          <Thumbnail
            src={this.props.photo.urls.small}
            onClick={this.toggleModal}
          />
        ) : (
          <Img
            landscape={this.props.landscape}
            id='photo-img'
            onClick={this.toggleModal}
            src={this.props.photo.urls.regular}
            alt={this.props.photo.alt_description}
          />
        )}
        <Modal
          id='modal'
          onClose={this.toggleModal}
          show={this.state.show}
          photo={this.props.photo.urls.full}></Modal>
      </Container>
    );
  }
}

export default Photo;

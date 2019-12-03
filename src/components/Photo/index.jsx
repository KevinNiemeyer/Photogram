import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const Container = styled.div``;

const Img = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

class Photo extends Component {
  state = {
    show: false
  };

  toggleModal = () => {
    this.setState({ ...this.state, show: !this.state.show });
    console.log(this.props.photo);
  };

  render() {
    return (
      <Container id='photo-container'>
        <Img
          id='photo-img'
          onClick={this.toggleModal}
          src={this.props.photo.urls.small}
          alt={this.props.photo.alt_description}
        />
        <Modal
          id='modal'
          onClose={this.toggleModal}
          show={this.state.show}
          photo={this.props.photo.urls.small}></Modal>
      </Container>
    );
  }
}

export default Photo;

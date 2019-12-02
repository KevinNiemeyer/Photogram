import React, { Component } from 'react';
import styled from 'styled-components';
import UserLink from '../UserLink/';
import Modal from '../Modal';

const Container = styled.div`
  width: 25%;
  margin: 0 auto;
  position: relative;
`;

const Img = styled.img`
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
      <Container>
        <UserLink category='this.props.category' photo={this.props.photo} />
        <Img
          onClick={this.toggleModal}
          src={this.props.photo.urls.small}
          alt={this.props.photo.alt_description}
        />
        <Modal
          onClose={this.toggleModal}
          show={this.state.show}
          photo={this.props.photo.urls.small}></Modal>
      </Container>
    );
  }
}

export default Photo;

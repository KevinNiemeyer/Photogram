import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Modal';

const Container = styled.div`
  height: 100%;
`;

const ColumnPhoto = styled.img`
  display: flex;
  justify-content: center;
  background: url(${props => props.src}) no-repeat center center;
  &:hover {
    opacity: 0.8;
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

const GridPhoto = styled.img`
  &:hover {
    opacity: 0.8;
  }
  width: 100%;
  height: 200px;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
`;

const ListPhoto = styled.img`
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  width: 64px;
  height: 64px;
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
        {this.props.isGrid ? (
          <GridPhoto
            landscape={this.props.landscape}
            src={this.props.photo.urls.small}
            onClick={this.toggleModal}
          />
        ) : this.props.isColumn ? (
          <ColumnPhoto
            landscape={this.props.landscape}
            id='column-photo-img'
            onClick={this.toggleModal}
            src={this.props.photo.urls.regular}
            alt={this.props.photo.alt_description}
          />
        ) : (
          <ListPhoto
            landscape={this.props.landscape}
            id='list-photo-img'
            onClick={this.toggleModal}
            src={this.props.photo.urls.thumb}
            alt={this.props.photo.alt_description}
          />
        )}
        <Modal
          id='modal'
          onClose={this.toggleModal}
          show={this.state.show}
          photo={this.props.photo.urls.full}
        />
      </Container>
    );
  }
}

export default Photo;

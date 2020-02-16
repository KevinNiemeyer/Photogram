import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Modal';
import ReactTooltip from 'react-tooltip';
import Favorites from '../../pages/Favorites';

const Container = styled.div`
  position: relative;
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

const FavIcon = styled.div`
  color: red;
  position: absolute;
  font-size: 24px;
  top: 5px;
  left: 5px;
  &:active {
    transform: scale(0.9);
  }
`;

class Photo extends Component {
  state = {
    show: false,
    favorite: false
  };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  addFavorite = () => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (!storedFavorites) {
      storedFavorites = [];
    }
    if (storedFavorites.includes(this.props.photo.id)) {
      console.log('already in favorites');
    } else {
      storedFavorites.push(this.props.photo.id);
    }

    localStorage.setItem('favorites', JSON.stringify(storedFavorites));
    this.setState({ favorite: true });
  };

  render() {
    console.log(this.props.photo);
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
        <FavIcon data-tip='Add to favorites' onClick={this.addFavorite}>
          &hearts;
        </FavIcon>
        <Modal
          id='modal'
          onClose={this.toggleModal}
          show={this.state.show}
          photo={this.props.photo.urls.full}
        />
        <ReactTooltip type='info' />
      </Container>
    );
  }
}

export default Photo;

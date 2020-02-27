import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Modal';
import ReactTooltip from 'react-tooltip';

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
  top: 10px;
  left: 10px;
  -webkit-text-stroke: 2px red;
  -webkit-text-fill-color: transparent;
  &:active {
    transform: scale(0.9);
    -webkit-text-fill-color: red;
  }
  ${props =>
    props.list &&
    css`
      display: none;
    `}
  ${props =>
    props.isFavoritePage &&
    css`
      display: none;
    `}
`;

const AddMsg = styled.div`
  position: absolute;
  top: -75px;
  left: 0px;
  right: 0px;
  width: 100%;
  text-align: center;
  transition: all 0.2s ease-in-out;
  background-color: rgb(247, 154, 120);
  padding: 5px;
  border-radius: 3px;

  ${props =>
    props.showAdd
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

class Photo extends Component {
  state = {
    show: false,
    favorite: false,
    exists: false,
    showAdd: false,
    msg: '',
    isFavoritePage: false
  };

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  addFavorite = () => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites'));

    if (!storedFavorites) {
      storedFavorites = [];
    }

    var tmpArr = storedFavorites.filter(photo => {
      return this.props.photo.id === photo.id;
    });

    if (tmpArr.length) {
      this.setState({ msg: 'That photo is already in your favorites.' });
      this.setState({ exists: true });
    } else {
      this.setState({ exists: false });
      storedFavorites.push(this.props.photo);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      this.setState({ favorite: true });
      this.setState({ msg: 'Photo added to favorites.' });
    }
    this.setState({ showAdd: true });
    setTimeout(() => {
      this.setState({ showAdd: false });
    }, 1500);
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
        <FavIcon
          isFavoritePage={this.props.isFavoritePage}
          list={this.props.isList}
          data-tip='Add to favorites'
          onClick={this.addFavorite}>
          &hearts;
        </FavIcon>
        <ReactTooltip type='info' place='top' effect='solid' />
        <Modal
          id='modal'
          onClose={this.toggleModal}
          show={this.state.show}
          photo={this.props.photo.urls.full}
        />
        <AddMsg showAdd={this.state.showAdd}>{this.state.msg}</AddMsg>
      </Container>
    );
  }
}

export default Photo;

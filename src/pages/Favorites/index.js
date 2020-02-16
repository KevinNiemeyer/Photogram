//getting an issue where the first search you do works, but if you type in a different search term,
//it still displays the first search

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
import styled, { css } from 'styled-components';
import UserLink from '../../components/UserLink';
import { LayoutContext } from '../../App';
import SelectView from '../../components/SelectView';
import GoToTop from '../../components/GoToTop';
import ReactTooltip from 'react-tooltip';

const Container = styled.div`
  margin: 0 auto;
  background-color: rgb(250, 250, 250);
`;

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  padding: 20px 0 0 20px;
  background-color: rgb(250, 250, 250);
`;

const Results = styled.div`
  width: 100%;
  ${props =>
    props.isGrid &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}
  ${props =>
    props.isColumn &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

const PhotoContainer = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  cursor: pointer;

  ${props =>
    props.landscape
      ? css`
          width: 80vw;
        `
      : css`
          height: 80vh;
        `}
    ${props =>
      props.isGrid &&
      css`
        display: flex;
        width: 250px;
        height: 100%;
        padding-left: 15px;
        padding-right: 15px;
      `}
  ${props =>
    props.isList &&
    css`
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 100%;
      height: 64px;
      padding-left: 30px;
    `}
  ${props =>
    props.isColumn &&
    css`
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 50%;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 10px;
  right: 25px;
  font-size: 16px;
  font-weight: bold;
  color: red;
  background-color: rgb(250, 250, 250);
  border-radius: 3px;
  z-index: 2;
`;

const Loader = styled.div``;

const Favorites = () => {
  const [photos, setPhotos] = useState([]);

  let storedFavorites = JSON.parse(localStorage.getItem('favorites'));
  if (!storedFavorites) {
    console.log('no favorites');
    storedFavorites = [];
  }
  var tmpArr = [];
  const getData = () => {
    const newFavorites = storedFavorites.map(id => {
      unsplash.photos
        .getPhoto(id)
        .then(toJson)
        .then(json => {
          tmpArr.push(json);
        });
    });
    setPhotos(tmpArr);
  };

  const removeFavorite = photo => {
    console.log(photo);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!photos.length) {
    return null;
  }

  return (
    <LayoutContext.Consumer>
      {value => {
        return (
          <Container id='favorites-container'>
            <GoToTop />
            <Heading id='favorites-heading'>
              Favorites:
              <SelectView value={value}></SelectView>
            </Heading>
            <Results
              isGrid={value.isGrid}
              isColumn={value.isColumn}
              isList={value.isList}
              id='landing-results'>
              {photos.map(photo => {
                const { height, width } = photo;
                return (
                  <PhotoContainer
                    key={photo.id}
                    isGrid={value.isGrid}
                    isColumn={value.isColumn}
                    isList={value.isList}
                    landscape={width > height}>
                    <UserLink
                      isGrid={value.isGrid}
                      isColumn={value.isColumn}
                      isList={value.isList}
                      key={photo.user.id}
                      id='userlink'
                      photo={photo}
                    />
                    <Photo
                      landscape={width > height}
                      isGrid={value.isGrid}
                      isColumn={value.isColumn}
                      isList={value.isList}
                      id='photo'
                      key={photo.id}
                      photo={photo}
                      photoToRemove={photo}
                    />
                    <Remove
                      photo={photo}
                      onClick={() => this.removeFavorite(photo)}
                      data-tip='Remove from favorites'>
                      x
                    </Remove>
                  </PhotoContainer>
                );
              })}
            </Results>
            <ReactTooltip type='info' />
          </Container>
        );
      }}
    </LayoutContext.Consumer>
  );
};
export default Favorites;

import React, { useState, useEffect } from 'react';
import UserInfo from '../../components/UserInfo';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import styled, { css } from 'styled-components';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
import { LayoutContext } from '../../App';
import SelectView from '../../components/SelectView';
import GoToTop from '../../components/GoToTop';

const Container = styled.div`
  margin: 0 auto;
`;

const Results = styled.div`
  padding: 20px;
  width: 100%;
  ${(props) =>
    props.isGrid &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}
  ${(props) =>
    props.isColumn &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;

const PhotoContainer = styled.div`
  cursor: pointer;

  ${(props) =>
    props.isGrid &&
    css`
      display: flex;
      flex-direction: column;
      width: 250px;
      height: 250px;
      padding: 0;
      padding: 0 20px 40px 20px;
    `}

  ${(props) =>
    props.isColumn &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      padding-bottom: 75px;
    `}
`;

const TitleBar = styled.h1`
  text-align: center;
  font-size: 48px;
  margin: 20px;
`;
const Loader = styled.div``;

const UserPage = (props) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const getData = () => {
    unsplash.users
      .photos(props.match.params.userName, page, 5, 'popular', false)
      .then(toJson)
      .then((json) => {
        setPhotos([...photos, ...json]);
        setPage(page + 1);
      });
  };

  useEffect(() => {
    getData();
  }, []); // empty array for componentDidMount,
  // put value in array for componentDidUpdate
  const user = photos.length ? photos[0].user : null;
  console.log(user);
  return (
    <LayoutContext.Consumer>
      {(value) => {
        return (
          <Container>
            <GoToTop />
            <UserInfo user={user} />
            <SelectView value={value}></SelectView>
            <TitleBar>{props.match.params.userName}'s Photos:</TitleBar>
            <InfiniteScroll
              id='infinite-scroll'
              pageStart={1}
              loadMore={getData}
              hasMore
              loader={<Loader key={0}>Loading ...</Loader>}>
              <Results
                id='landing-results'
                isGrid={value.isGrid}
                isColumn={value.isColumn}>
                {photos.map((photo) => {
                  const { height, width } = photo;
                  return (
                    <PhotoContainer
                      id='photo-container'
                      key={photo.id}
                      isGrid={value.isGrid}
                      isColumn={value.isColumn}>
                      <Photo
                        category='user'
                        landscape={width > height}
                        isGrid={value.isGrid}
                        isColumn={value.isColumn}
                        id='photo'
                        key={photo.id}
                        photo={photo}
                      />
                    </PhotoContainer>
                  );
                })}
              </Results>
            </InfiniteScroll>
          </Container>
        );
      }}
    </LayoutContext.Consumer>
  );
};

export default UserPage;

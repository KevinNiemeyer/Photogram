import React, { useState, useEffect } from 'react';
import { toJson } from 'unsplash-js';
import styled, { css } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import UserInfoComponent from '../../components/UserInfo';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
import { LayoutContext } from '../../App';
import SelectView from '../../components/SelectView';

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: rgb(250, 250, 250);
`;

const Results = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  ${props =>
    props.isGrid &&
    css`
      display: flex;
      flex-wrap: wrap;
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
margin-bottom: 50px;
  padding: 10px;
  ${props =>
    !props.isGrid &&
    css`
      display: flex;
    `}
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
      width: 250px;
      height: 250px;
    `}
  ${props =>
    props.isList &&
    css`
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 100%;
      height: 64px;
    `}
  ${props =>
    props.isColumn &&
    css`
      display: flex;
      flex-direction: column;
      width: 30%;
      padding-bottom: 75px;
    `}
`;

const selectStyle = {};

const Loader = styled.div``;

const Landing = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    unsplash.users
      .photos(
        this.props.match.params.userName,
        this.state.page,
        5,
        'popular',
        false
      )
      .then(toJson)
      .then(json => {
        this.setState({
          photos: [...this.state.photos, ...json],
          page: this.state.page + 1,
          hasMore: !!json.length
        });
      });
  };
  useEffect(() => {
    getData();
  }, []); // empty array for componentDidMount,
  // put value in array for componentDidUpdate

  return (
    <LayoutContext.Consumer>
      {value => {
        return (
          <Container>
            <UserInfoComponent user={user} />
            <SelectView style={selectStyle} />
            <InfiniteScroll
              id='user-page-infinite-scroll'
              pageStart={1}
              loadMore={this.getData}
              hasMore={true || false}
              loader={<Loader key={0}>Loading ...</Loader>}>
              <Results
                id='user-results'
                isGrid={value.isGrid}
                isColumn={value.isColumn}
                isList={value.isList}>
                {photos.map(photo => {
                  const { height, width } = photo;
                  return (
                    <PhotoContainer
                      id='user-page-photo-container'
                      key={photo.id}
                      isGrid={value.isGrid}
                      isColumn={value.isColumn}
                      isList={value.isList}
                      landscape={width > height}>
                      <Photo
                        category='user'
                        landscape={width > height}
                        isGrid={value.isGrid}
                        isColumn={value.isColumn}
                        isList={value.isList}
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

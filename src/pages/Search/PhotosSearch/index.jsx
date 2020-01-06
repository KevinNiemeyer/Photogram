import React, { useState, useEffect } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../../components/Photo';
import { unsplash } from '../../../unsplash';
import styled from 'styled-components';
import UserLink from '../../../components/UserLink';
import { LayoutContext } from '../../../App';
import SelectView from '../../../components/SelectView';

const Container = styled.div`
  margin: 0 auto;

  background-color: rgb(250, 250, 250);
`;

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  padding: 20px 0 0 20px;
`;

const Results = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  padding: 20px;
  padding-right: 20px;
  width: 100%;
`;

const PhotoContainer = styled.div`
  width: 150px;
  height: auto;
  padding: 20px;
`;

const Loader = styled.div``;

const PhotoSearch = props => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    unsplash.search
      //getting stuck here. how do I get props from here??
      .photos(props.match.params.searchTerm, 1, 5, {
        orientation: 'portrait'
      })
      .then(toJson)
      .then(json => {
        console.log(json);
        setPhotos([...photos, ...json.results]);
        setPage(page + 1);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutContext.Consumer>
      {value => {
        console.log(photos);
        return (
          <Container>
            <Heading>
              Search results for {props.match.params.searchTerm}
              <SelectView value={value}></SelectView>
            </Heading>
            <InfiniteScroll
              id='infinite-scroll'
              pageStart={1}
              loadMore={getData}
              hasMore
              loader={<Loader key={0}>Loading ...</Loader>}>
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
                      landscape={width > height}
                      id='photo-container'>
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
export default PhotoSearch;

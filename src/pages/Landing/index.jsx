import React, { Component, useState, useEffect } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
import styled, {css} from 'styled-components';
import UserLink from '../../components/UserLink';
import {LayoutContext} from '../../App';


const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: rgb(250, 250, 250);
`;

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  padding: 20px 0 0 20px;
`;

const Results = styled.div`
 
  position: relative;
  padding: 20px;
  width: 100%;
  ${props => props.isRow && css`
    display: flex;
    flex-wrap: wrap;
  `}
`;

const PhotoContainer = styled.div`
  ${props => props.landscape ? css`
    width: 80vw;
  ` : css`
    height: 80vh;
  `}
  ${props => props.isRow && css`
    width: 250px;
    height: 250px;
  `}
`;

const Loader = styled.div``;

const Landing = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);


  const getData = () => {
    unsplash.photos
      .listPhotos(page, 25, 'latest')
      .then(toJson)
      .then(json => {
        setPhotos([...photos, ...json]);
        setPage(page + 1)
      });
  };

  useEffect(() => {
    getData()
  },[])

  return (
    <LayoutContext.Consumer>
      {(value) => {
        console.log('argument', value)
        return (
        <Container id='landing-container'>
          <Heading id='landing-heading'>Latest Photos: <button onClick={value.toggleRow} >Toggle Row</button></Heading>
          <InfiniteScroll
            id='infinite-scroll'
            pageStart={1}
            loadMore={getData}
            hasMore
            loader={<Loader key={0}>Loading ...</Loader>}>
              <Results isRow={value.isRow} id='landing-results' style={divStyle}>
                {photos.map(photo => {
                  const { height, width } = photo;


                  return (
                    <PhotoContainer isRow={value.isRow} landscape={width > height} id='photo-container'>
                      <UserLink id='userlink' photo={photo} />
                      <Photo landscape={width > height} isRow={value.isRow} id='photo' key={photo.id} photo={photo} />
                    </PhotoContainer>
                  );
                })}
              </Results>
          </InfiniteScroll>
        </Container>
      )}}
   </LayoutContext.Consumer>
  );
}

export default Landing;

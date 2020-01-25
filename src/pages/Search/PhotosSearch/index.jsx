import React, { useState, useEffect } from "react";
import { toJson } from "unsplash-js";
import InfiniteScroll from "react-infinite-scroller";
import Photo from "../../../components/Photo";
import { unsplash } from "../../../unsplash";
import styled from "styled-components";
import UserLink from "../../../components/UserLink";
import { LayoutContext } from "../../../App";
import SelectView from "../../../components/SelectView";
import PhotosList from "../../../components/PhotosList";
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
      .photos(props.match.params.searchTerm, page, 5)
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
            <PhotosList getData={getData} photos={photos} />
          </Container>
        );
      }}
    </LayoutContext.Consumer>
  );
};
export default PhotoSearch;

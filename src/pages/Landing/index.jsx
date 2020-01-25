import React, { useState, useEffect } from "react";
import { toJson } from "unsplash-js";
import InfiniteScroll from "react-infinite-scroller";
import Photo from "../../components/Photo";
import { unsplash } from "../../unsplash";
import styled, { css } from "styled-components";
import UserLink from "../../components/UserLink";
import { LayoutContext } from "../../App";
import SelectView from "../../components/SelectView";
import PhotosList from "../../components/PhotosList";

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

const ResultContainer = styled.div`

  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
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
        height: 250px;
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
      width: 50%;
    `}
`;

const Loader = styled.div``;

const Landing = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    unsplash.photos
      .listPhotos(page, 25, "latest")
      .then(toJson)
      .then(json => {
        setPhotos([...photos, ...json]);
        setPage(page + 1);
      });
  };

  // is this code needed, and if so, why?
  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutContext.Consumer>
      {value => {
        return (
          <Container id="landing-container">
            <Heading id="landing-heading">
              Latest Photos:
              <SelectView value={value}></SelectView>
            </Heading>
            <PhotosList getData={getData} photos={photos} />
          </Container>
        );
      }}
    </LayoutContext.Consumer>
  );
};

export default Landing;

import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled, { css } from "styled-components";
import { LayoutContext } from "../../App";
import UserLink from "../UserLink";
import Photo from "../Photo";

const Loader = styled.div``;

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

export default ({ getData, photos }) => (
  <LayoutContext.Consumer>
    {value => (
      <InfiniteScroll
        id="infinite-scroll"
        pageStart={1}
        loadMore={getData}
        hasMore
        loader={<Loader key={0}>Loading ...</Loader>}
      >
        <Results
          isGrid={value.isGrid}
          isColumn={value.isColumn}
          isList={value.isList}
          id="landing-results"
        >
          {photos.map(photo => {
            const { height, width } = photo;
            return (
              <ResultContainer
                key={photo.id}
                isGrid={value.isGrid}
                isColumn={value.isColumn}
                isList={value.isList}
                landscape={width > height}
                id="result-container"
              >
                <UserLink
                  isGrid={value.isGrid}
                  isColumn={value.isColumn}
                  isList={value.isList}
                  key={photo.user.id}
                  id="userlink"
                  photo={photo}
                />
                <Photo
                  landscape={width > height}
                  isGrid={value.isGrid}
                  isColumn={value.isColumn}
                  isList={value.isList}
                  id="photo"
                  key={photo.id}
                  photo={photo}
                />
              </ResultContainer>
            );
          })}
        </Results>
      </InfiniteScroll>
    )}
  </LayoutContext.Consumer>
);

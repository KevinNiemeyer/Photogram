import React, { useState, useEffect } from 'react';
import { LayoutContext } from '../../../App';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import { unsplash } from '../../../unsplash';
import styled, { css } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import GoToTop from '../../../components/GoToTop';
import SelectView from '../../../components/SelectView';
import { Heading } from '../../../components/ui/styles';
const Loader = styled.div``;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
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

const Collection = styled.div`
  margin: 15px 50px 15px 50px;
  cursor: pointer;

  ${props =>
    props.isGrid &&
    css`
      width: 250px;
    `}
  ${props =>
    props.isColumn &&
    css`
      width: 50%;
      flex: 1;
    `}
`;
const LinkTitle = styled.div`
  padding: 0 0 10px 0;
  font-size: 20px;
  color: rgb(247, 154, 120);
  text-align: left;
`;
const Img = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  &:hover {
    opacity: 0.8;
  }
  ${props =>
    props.isGrid &&
    css`
      width: 225px;
      height: 225px;
    `}
  ${props =>
    props.isColumn &&
    css`
      width: 500px;
      height: 500px;
    `}
`;

const linkStyle = {
  textDecoration: 'none',
  fontSize: '24px',
  padding: '10px'
};

const SearchTerm = styled.span`
  color: rgb(255, 0, 0);
  font-size: 35px;
`;

const HR = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  background-color: red;
`;

const CollectionSearch = props => {
  const [collections, setCollections] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const getData = () => {
    if (!hasMore) return;
    unsplash.search
      .collections(props.match.params.collection, page, 5)
      .then(toJson)
      .then(json => {
        setCollections([...collections, ...json.results]);
        setPage(page + 1);
        if (!totalPages) setTotalPages(json.total_pages);
        if (json.results === 0) setHasMore(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutContext.Consumer>
      {value => {
        return (
          <Container>
            <GoToTop />
            <Heading>
              Search results for
              <SearchTerm> {props.match.params.collection} </SearchTerm>in
              <SearchTerm> Collections</SearchTerm>:
            </Heading>
            <SelectView value={value}></SelectView>
            <HR />
            <InfiniteScroll
              pageStart={1}
              loadMore={getData}
              hasMore
              loader={<Loader key={0}>Loading ...</Loader>}>
              <Results
                id='collection-search-results'
                isGrid={value.isGrid}
                isColumn={value.isColumn}>
                {collections.map(collection => {
                  return (
                    <Collection id='collection' key={collection.id}>
                      <Link
                        category='collection'
                        id={collection.id}
                        to={`/collection/${collection.id}`}
                        style={linkStyle}
                        key={collection.id}>
                        <LinkTitle>{collection.title}</LinkTitle>
                        <Img
                          isGrid={value.isGrid}
                          isColumn={value.isColumn}
                          src={collection.cover_photo.urls.small}
                          alt={collection.title}
                          key={collection.id}
                        />
                      </Link>
                    </Collection>
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

export default CollectionSearch;

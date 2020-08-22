import React, { useState, useEffect } from 'react';
import { LayoutContext } from '../../../App';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import styled, { css } from 'styled-components';
import { unsplash } from '../../../unsplash';
import InfiniteScroll from 'react-infinite-scroller';
import GoToTop from '../../../components/GoToTop';
import SelectView from '../../../components/SelectView';
import { Heading } from '../../../components/ui/styles';
const Loader = styled.div``;

const Container = styled.div`
  margin: 0 auto;

  background-color: rgb(250, 250, 250);
`;

const Results = styled.div`
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
      align-items: center;
    `}
`;

const User = styled.div`
  margin: 15px 45px 15px 45px;

  cursor: pointer;

  ${(props) =>
    props.isGrid &&
    css`
      width: 250px;
    `}

  ${(props) =>
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
const Img = styled.img`
  ${(props) =>
    props.landscape
      ? css`
          width: 80vw;
        `
      : css`
          height: 80vh;
        `}
        transition: all 10s;
        &:hover {
          transform: scale(1.2);
        }
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover;
  ${(props) =>
    props.isGrid &&
    css`
      width: 225px;
      height: 225px;
    `}
  ${(props) =>
    props.isColumn &&
    css`
      width: 350px;
      height: 350px;
    `}
`;

const linkStyle = {
  textDecoration: 'none',
  fontSize: '24px',
  padding: '10px',
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

const UserSearch = (props) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const getData = () => {
    if (!hasMore) return;
     unsplash.search
      .users(props.match.params.user, page, 5)
      .then(toJson)
      .then((json) => {
        setUsers([...users, ...json.results]);
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
      {(value) => {
        return (
          <Container id='user-search-container'>
            <GoToTop />
            <Heading>
              Search results for{' '}
              <SearchTerm> {props.match.params.user} </SearchTerm> in
              <SearchTerm> Users</SearchTerm>:
            </Heading>
            <SelectView value={value}></SelectView>
            <HR />
            <InfiniteScroll
              pageStart={1}
              loadMore={getData}
              hasMore
              loader={<Loader key={0}>Loading...</Loader>}>
              <Results
                id='user-search-results'
                isGrid={value.isGrid}
                isColumn={value.isColumn}>
                {users.map((user) => {
                  const { height, width } = user.profile_image.large;
                  return (
                    <User id='user'>
                      <Link
                        category='user'
                        id={user.id}
                        to={`/user/${user.username}`}
                        style={linkStyle}
                        key={user.id}>
                        <LinkTitle>{user.username}</LinkTitle>
                        <div style={{overflow:'hidden'}}>
                        <Img
                          isGrid={value.isGrid}
                          isColumn={value.isColumn}
                          src={user.profile_image.large}
                          alt={user.username}
                          key={user.id}
                          landscape={width > height}
                        />
                        </div>
                      </Link>
                    </User>
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

export default UserSearch;

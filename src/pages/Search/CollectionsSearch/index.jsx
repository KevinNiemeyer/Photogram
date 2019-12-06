import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import { unsplash } from '../../../unsplash';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
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
`;

const LinkName = styled.div`
  color: purple;
  width: 50%;
  margin: 0 auto;
  text-decoration: none;
  padding: 20px;
  &:hover {
    opacity: 0.8;
  }
`;
const LinkTitle = styled.div`
  padding: 10px;
  font-size: 20px;
`;
const Img = styled.img`
  margin-right: 20px;
  width: 100%;
`;

export class CollectionSearch extends Component {
  state = {
    collections: []
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  getData() {
    unsplash.search
      .collections(this.props.match.params.collection, 1, 5)
      .then(toJson)
      .then(json => {
        this.setState({ collections: json.results });
      });
  }

  render() {
    const { collections } = this.state;

    return (
      <Container>
        <Heading>
          Search results for "{this.props.match.params.collection}":
        </Heading>

        <Results>
          {collections.map(collection => {
            return (
              <LinkName>
                <Link
                  to={`/collection/${collection.id}`}
                  style={{ textDecoration: 'none' }}
                  key={collection.id}>
                  <LinkTitle>{collection.title}</LinkTitle>
                  <Img src={collection.cover_photo.urls.small} alt='none' />
                </Link>
              </LinkName>
            );
          })}
        </Results>
      </Container>
    );
  }
}

export default CollectionSearch;

/* unsplash.search.collections("dogs", 1)
  .then(toJson)
  .then(json => {
    // Your code
  }); */

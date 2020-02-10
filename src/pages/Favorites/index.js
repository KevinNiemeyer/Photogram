import React, { Component } from 'react';
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
  background-color: rgb(250, 250, 250);
`;

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  padding: 20px 0 0 20px;
`;

class Favorites extends Component {
  render() {
    return (
      <Container id='favorites-container'>
        <Heading>Favorite Pics:</Heading>
      </Container>
    );
  }
}

export default Favorites;

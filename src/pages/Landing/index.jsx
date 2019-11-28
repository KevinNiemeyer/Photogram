import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import 'react-loading-bar/dist/index.css'
import Loading from 'react-loading-bar'
import './LandingStyles.css';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';

export class Landing extends Component {
  state = {
    photos: [],
    page: 1, loading: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ loading: true })
    unsplash.photos
      .listPhotos(this.state.page, 5, 'latest')
      .then(toJson)
      .then(json => {
        this.setState({
          photos: [...this.state.photos, ...json],
          page: this.state.page + 1,
          hasMore: !!json.length,
          loading: false
        });
      });
  };

  render() {
    if (!this.state.photos.length) return null;
    return (
      <div className='landing-page'>
        <Loading show
          color="red" />
        <div className='landing-heading'>Latest Photos:</div>
        <div className='landing-results'>
          <InfiniteScroll
            pageStart={1}
            loadMore={this.getData}
            hasMore={true || false}
            loader={
              <div className='loader' key={0}>
                Loading ...
              </div>
            }>
            {this.state.photos.map(photo => {
              console.log(photo);
              return <Photo key={photo.id} photo={photo} />;
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
export default Landing;

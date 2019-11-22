import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import './LandingStyles.css';
import LandingPhoto from '../../components/LandingPhoto';
import { unsplash } from '../../unsplash';

export class Landing extends Component {
  state = {
    photos: [],
    page: 1
  };



  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.getData();
  }


  getData = () => {
    unsplash.photos
      .listPhotos(this.state.page, 15, 'latest')
      .then(toJson)
      .then(json => {
        this.setState({
          photos: [...this.state.photos, ...json],
          page: this.state.page + 1,
          hasMore: !!json.length
        });
      });
  }

  render() {
    if (!this.state.photos.length) return null;
    return (

      <div className='container'>
        <div className='landing-heading'>Latest Photos</div>
        <div className='landing-page-component'>
          <InfiniteScroll

            pageStart={1}
            loadMore={this.getData}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            {this.state.photos.map(photo => {
              return <LandingPhoto key={photo.id} photo={photo} />;
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
export default Landing;

import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import './CollectionStyles.css';
import { unsplash } from '../../unsplash';

export class Collection extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getData();
    }
  }

  getData() {
    unsplash.collections
      .getCollectionPhotos(this.props.match.params.id, 1, 10, 'popular')
      .then(toJson)
      .then(json => {
        this.setState({
          photos: json
        });
      });
  }

  render() {
    const { photos } = this.state;
    console.log(photos);
    if (!photos.length) return null;
    return (
      <div className='collection-page'>
        <div className='collection-heading'>Collection: </div>
        <div className='collection-results'>
          {photos.map(photo => {
            return <Photo key={photo.id} photo={photo} />;
          })}
        </div>
      </div>
    );
  }
}

export default Collection;

/* <div className='landing-page-component'>
{this.state.photos.map(photo => {
  return <LandingPhoto key={photo.id} photo={photo} />;
})}
</div> */

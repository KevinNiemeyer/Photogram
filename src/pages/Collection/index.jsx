import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import './CollectionStyles.css';
import { unsplash } from '../../unsplash';

export class Collection extends Component {
  state = {
    photos: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.collections
      .getCollectionPhotos(
        this.props.match.params.id,
        this.state.page,
        10,
        'popular'
      )
      .then(toJson)
      .then(json => {
        this.setState({
          photos: [...this.state.photos, ...json],
          page: this.state.page + 1,
          hasMore: !!json.length
        });
      });
  };

  render() {
    const { photos } = this.state;
    console.log(photos);
    if (!photos.length) return null;
    return (
      <div className='collection-page'>
        <div className='collection-heading'>Collection: </div>
        <div className='collection-results'>
          <InfiniteScroll
            pageStart={1}
            loadMore={this.getData}
            hasMore={true || false}
            loader={
              <div className='loader' key={0}>
                Loading ...
              </div>
            }>
            {photos.map(photo => {
              return <Photo key={photo.id} photo={photo} />;
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default Collection;

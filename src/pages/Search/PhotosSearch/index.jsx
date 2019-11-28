import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import './PhotosSearchStyles.css';
import Photo from '../../../components/Photo';
import { unsplash } from '../../../unsplash';

export class PhotoSearch extends Component {
  state = {
    photos: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.search
      .photos(this.props.match.params.searchTerm, 1, 10, {
        orientation: 'portrait'
      })
      .then(toJson)
      .then(json => {
        this.setState({
          photos: [...this.state.photos, ...json.results],
          page: this.state.page + 1,
          hasMore: !!json.results.length
        });
      });
  };

  render() {
    if (!this.state.photos.length) return null;
    return (
      <div className='photo-search-page'>
        <p className='photo-search-heading'>
          Search results for "{this.props.match.params.searchTerm}"
        </p>
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
              return <Photo key={photo.id} photo={photo} />;
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
export default PhotoSearch;

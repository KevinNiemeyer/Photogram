import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import Photo from '../../../components/Photo';
import './PhotoSearchStyles.css';
import { unsplash } from '../../../unsplash';

export class PhotoSearch extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  getData() {
    console.log(this.props.match.params.searchTerm);
    unsplash.search
      .photos(this.props.match.params.searchTerm, 1, 10, {
        orientation: 'portrait'
      })
      .then(toJson)
      .then(json => {
        this.setState({ photos: json.results });
      });
  }

  render() {
    const { photos } = this.state;
    return (
      <div className='photo-search-page'>
        <p className='photo-search-heading'>
          Search results for "{this.props.match.params.searchTerm}"
        </p>
        <div className='photo-search-results'>
          {photos.map(photo => {
            return <Photo key={photo.id} photo={photo} />;
          })}
        </div>
      </div>
    );
  }
}

export default PhotoSearch;

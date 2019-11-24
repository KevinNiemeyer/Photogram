import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import './CollectionSearchStyles.css';
import { unsplash } from '../../../unsplash';

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
      .collections(this.props.match.params.collection, 1)
      .then(toJson)
      .then(json => {
        this.setState({ collections: json.results });
      });
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='collection-search-page'>
        <p className='collection-search-heading'>
          Search results for "{this.props.match.params.collection}":
        </p>

        <div className='collection-search-results'>
          {collections.map(collection => {
            return (
              <Link
                className='collection-search-link-name'
                to={`/collection/${collection.id}`}
                style={{ textDecoration: 'none' }}
                key={collection.id}>
                <div className='collection-search-link-title'>
                  {collection.title}
                </div>
                <img src={collection.cover_photo.urls.small} alt='none' />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CollectionSearch;

/* unsplash.search.collections("dogs", 1)
  .then(toJson)
  .then(json => {
    // Your code
  }); */

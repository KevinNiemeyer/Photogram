import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import NoMatch from '../NoMatch/';

import './CollectionsSearchStyles.css';
import { unsplash } from '../../../unsplash';

export class ComponentsSearch extends Component {
  state = {
    collections: []
  };

  componentDidMount() {
    this.getData(this.props.match.params.collection);
  }

  componentDidUpdate() {
    this.getData(this.props.match.params.collection);
  }

  getData(collection) {
    unsplash.search
      .collections(collection, 1)
      .then(toJson)
      .then(json => {
        this.setState({ collections: json.results });
      });
  }

  render() {
    const { collections } = this.state;
    if (collections.length === 0) {
      return <NoMatch category={this.props.match.params.collections} />;
    }

    return (
      <div className='collection-search-results'>
        <p className='collection-search-heading'>
          Search results for "{this.props.match.params.collection}"
        </p>
        <div className='collection-search-results-container'>
          {collections.map(collection => {
            return (
              <Link
                className='collection-search-link-name'
                to={`/search/collection/${collection.title}`}
                style={{ textDecoration: 'none' }}>
                <p>{collection.title}</p>
                <img src={collection.cover_photo.urls.small} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ComponentsSearch;

/* unsplash.search.collections("dogs", 1)
  .then(toJson)
  .then(json => {
    // Your code
  }); */

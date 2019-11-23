import React, { Component } from 'react';
import { toJson } from 'unsplash-js';

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
      this.getData(this.props.match.params.id);
    }
  }

  getData() {
    // console.log(this.props.match.params.id);

    unsplash.collections
      .getCollection(3816141, 1, 10, 'popular')
      .then(toJson)
      .then(json => {
        console.log(json.results);
        this.setState({ photos: json.results });
      });
  }

  render() {
    const photos = this.state;
    if (!photos.length) return null;
    return (
      <div className='container'>
        <div className='landing-heading'>Latest Photos</div>
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

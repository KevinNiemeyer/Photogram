import React from 'react';
import './NoMatch.css';

const NoMatch = (props) => (
  <div className='no-match-heading'>
    No results for "{props.category}"
  </div>
)

export default NoMatch;
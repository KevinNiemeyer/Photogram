import React, { Component } from 'react';
import './UserStyles.css';

import { unsplash } from '../../unsplash';

export function UserPage(props) {
  console.log(props.match.params.userId);
  return (
    <div>
      <h1>User: </h1>
    </div>
  );
}

export default UserPage;

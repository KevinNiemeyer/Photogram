import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './SearchBarStyles.css';

export class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => this.setState({ searchTerm: e.target.value })

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state, this.props)
  //   this.props.history.push(`/search/${this.state.searchTerm}`)
  // }

  render() {
    return (
      <div className='search-bar-component'>
        <div className='search-bar-placeholder' >
          <input onChange={this.handleChange} type='text' placeholder='Search' className='search-bar-input'></input>
          <div>
            <button  >User: {this.state.searchTerm}</button>
            <button onClick={() => this.handleClick('user')}>Collections: {this.state.searchTerm}</button>
            <button>Photos: {this.state.searchTerm}</button>
          </div>

        </div>
      </div>
    );
  }
}




export default withRouter(SearchBar);

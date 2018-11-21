import React from 'react';
import './SearchBar.scss';

function SearchBar(props) {

  return (
    <div className="search">
      <input type="text" placeholder="Search by product name" value={props.searchTerm}
        onChange={(e) =>{props.onChange(e)}}></input>
      <i className="fa fa-search"></i>
    </div>
  )
}

export default SearchBar;

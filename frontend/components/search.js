import React from 'react';

const Search = ({ searchArtist }) => {
  let input;
  return (
    <div className="app-search">
      <div className="app-search-title">
        <h4 className="app-search-title-h4">Search Artist </h4>
      </div>
      <div className="app-search-find">
        <input ref={node => {
          input = node
        }} className="app-search-find-input" />
        <button className="app-search-find-button" onClick={() => {
          searchArtist(input.value);
          input.value = ''
        }}>
        Search
        </button>
      </div>
    </div>
  )
}

export default Search;
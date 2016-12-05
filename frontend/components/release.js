import React from 'react';

const Release = ({ name, artist, url, image }) => {
  return (
    <div className="app-new-songs-item">
      <img className="app-new-songs-item-image" src={`${image}`} />
      <a href={url} className="app-new-songs-item-name" target="_blank">
        {name}
      </a>
      <p className="app-new-songs-item-album">{artist}</p>
   </div>
 )
}

export default Release;

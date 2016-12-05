import React from 'react';

const Song = ({ name, album, preview, url }) => {
  return (
    <div className="app-album-songs-item">
      <img className="app-album-songs-item-image" src={`${album.images[0].url}`} />
      <audio className="app-album-songs-item-audio" src={preview} controls>
            Your browser does not support the <code>audio</code> element.
      </audio>
      <a href={url} className="app-album-songs-item-name" target="_blank">
        {name}
      </a>
      <p className="app-album-songs-item-album">{album.name}</p>
   </div>
 )
}

export default Song;

import React from 'react';
import Release from 'components/release';

const NewReleases = ({ songs }) => {
  return (
    <div className="app-new-songs">
      <h4 className="app-new-title">New releases</h4>
      {
        songs.map((song) => {
          return <Release key={song.id} image={song.images[0].url} name={song.name} artist={song.artists[0].name} url={song.external_urls.spotify} />
        })
      }
    </div>
  )
}

export default NewReleases;

import React from 'react';
import Song from 'components/song';

const Songs = ({ songs }) => {
  if (songs.length > 0) {
    return (
      <div className="app-album-songs">
        {
          songs.map((song) => {
            return <Song key={song.id} name={song.name} album={song.album} preview={song.preview_url} url={song.external_urls.spotify} />
          })
        }
     </div>
    )
  } else {
    return (
      <p>Loading</p>
    )
  }
}


const Artist = ({ artist, songs, error }) => {
  if (Object.keys(error).length > 0) {
    return (
      <p> {error.description} </p>
    )
  } else if (Object.keys(artist).length > 0) {
    return (
      <div className="app-album">
        <section className="app-album-picture">
          <h3 className="app-album-picture-name">{artist.name}</h3>
          <img className="app-album-picture-image" src={`${artist.images[0].url}`} />
        </section>
        <h4 className="app-album-title">Top songs</h4>
        <Songs songs={songs} />
      </div>
    )
  } else {
    return (
      <p>
      </p>
    )
  }
}

export default Artist;

import React, { Component } from 'react';
import request from 'superagent';

import Enpoint from 'utilities/endpoint'
import Artist from 'components/artist';
import Search from 'components/search';
import NewReleases from 'components/newReleases';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      songs: [],
      albums: [],
      error: {},
      newReleases: []
    }
  }
  searchArtist(name) {
    const encode = encodeURIComponent(name);

    request.get(`${Enpoint.artist}${encode}`)
      .end((err, res) => {
        if (res.body["artists"]["items"].length > 0) {
          this.setState({ error: {} });
          this.setState({artist: res.body["artists"]["items"][0] });
          this.loadTracks(this.state.artist.id);
        } else {
          this.setState({ error: { description: "Artist Not found" } });
        }
      });
  }
  loadAlbums(id) {
    request.get(`${Enpoint.albums}${id}`)
      .end((err, res) => {
        this.setState({ albums: res.body[""] })
      })
  }
  loadTracks(id) {
    request.get(`${Enpoint.tracks}${id}`)
      .end((err, res) => {
        this.setState({ songs: res.body["tracks"] })
      })
  }
  loadNewReleases() {
    request.get(`${Enpoint.newReleases}`)
      .end((err, res) => {
        this.setState({ newReleases: res.body["albums"]["items"] })
    });
  }
  componentDidMount() {
    this.loadNewReleases()
  }
  render() {
    return (
      <div className="app">
        <NewReleases songs={this.state.newReleases} />
        <Search searchArtist={this.searchArtist.bind(this)} />
        <Artist artist={this.state.artist} songs={this.state.songs} error={this.state.error} />
      </div>
    )
  }
}

export default App;

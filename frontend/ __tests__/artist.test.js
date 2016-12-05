import React from 'react';
import { shallow, mount } from 'enzyme';

import Artist from '../components/artist';
import artistData from '../../data/artist.json';
import songsData from '../../data/tracks.json';

describe("test artist component", () => {
  let artistComponent;
  let artistProp;
  const error = {};
  const artistDataRender = artistData["artists"]["items"][0];
  const songsDataRender = songsData["tracks"];

  beforeEach(() => {
    artistComponent = mount(<Artist artist={artistDataRender} songs={songsDataRender} error={error} />);
    artistProp = artistComponent.props().artist;
  });

  it("have a aritst prop", () => {
    expect(artistProp).toBeDefined();
  });

  it("have a name prop", () => {
    expect(artistProp.name).toEqual("Bastille");
  });

  it("have a image prop", () => {
    const image = artistProp.images[0].url
    expect(image).toBeDefined();
  });

  it("Songs component present", () => {
    expect(artistComponent.find('Songs').length).toEqual(1);
  });

  it("should render the songs", () => {
    const songs = artistComponent.find('.app-album-songs-item');
    expect(songs.length).toEqual(songsDataRender.length);
  });
});
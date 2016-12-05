import React from 'react';
import { shallow, mount } from 'enzyme';

import Song from '../components/song';

import songData from '../../data/tracks.json';

describe("Test Song Component", () => {
  let songComponent;
  const songDataRender = songData["tracks"][0];
  
  beforeEach(() => {
    songComponent = mount(<Song name={songDataRender.name} album={songDataRender.album} preview={songDataRender.preview_url} url={songDataRender.external_urls.spotify} />);
  });

  it('Have a name prop', () => {
    expect(songComponent.props().name).toBeDefined();
  });

  it("Have an album prop", () => {
    expect(songComponent.props().album).toBeDefined();
  });

  it("Have a preview prop", () => {
    expect(songComponent.props().preview).toBeDefined();
  });

  it("Have an url prop", () => {
    expect(songComponent.props().url).toBeDefined();
  });
})
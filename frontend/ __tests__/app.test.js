import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../components/app';

describe("Test App Component", () => {
  let app;
  
  beforeEach(() => {
    app = shallow(<App/>);
  });

  it('NewReleases present', () => {
    expect(app.find('NewReleases').length).toEqual(1);
  });

  it("Search present", () => {
    expect(app.find('Search').length).toEqual(1);
  });

  it("Artist", () => {
    expect(app.find('Artist').length).toEqual(1);
  });
})
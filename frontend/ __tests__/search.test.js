import React from 'react';
import { shallow, mount } from 'enzyme';
//shallow crea el componenete sin componenetes hijos, mount lo hace con los hijos y podemos acceder a mas propiedades

import Search from '../components/search';

describe("Test Search component", () => {
  let searchComponent;
  let searchAction;
  
  beforeEach(() => {
    searchAction = jest.fn();
    searchComponent = mount(<Search searchArtist={searchAction} />);
  });

  it('requires searchArtist prop', () => {
    expect(searchComponent.props().searchArtist).toBeDefined();
  })

  it('renders button', () => {
    const button = searchComponent.find('button').first();
    expect(button).toBeDefined();
  });

  it("Button click calls searchArtist", () => {
    const button = searchComponent.find('button').first();
    const input = searchComponent.find('input').first().node.value = 'paramore';;
    button.simulate('click');
    expect(searchAction).toBeCalledWith('paramore');
  });
})


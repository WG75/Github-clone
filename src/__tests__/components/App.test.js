import React from 'react';
import Enzyme from '../../config/enzyme';
import App from '../../containers/App';

describe('App component', () => {
  it('it renders h1', () => {
    const wrapper = Enzyme.shallow(<App />);

    expect(wrapper.find('h1').length).toBe(1);
  });
});

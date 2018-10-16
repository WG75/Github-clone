// @flow
import React from 'react';
import Enzyme from '../../config/enzyme';
import AuthTypeTapper from '../../components/AuthTypeTapper';

describe('Button component', () => {
  const onChangeMock = jest.fn();
  const wrapper = Enzyme.shallow(
    <AuthTypeTapper
      selectedType="token"
      authTypes={['token', 'username_&_password']}
      onChange={onChangeMock}
    />,
  );

  it('renders a radio button for each auth type', () => {
    expect(wrapper.find('label').length).toBe(2);
  });

  it('checks the radio button with the value of selectedType prop', () => {
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().checked,
    ).toBe(true);
  });

  it('calls onChange prop handler when input value changes giving it type value  an argument', () => {
    wrapper
      .find('input')
      .at(1)
      .simulate('change', onChangeMock);

    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe('username_&_password');
  });
});

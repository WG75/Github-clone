// @flow

import React from 'react';
import Enzyme from '../../config/enzyme';
import LoginPanel from '../../components/LoginPanel';

describe('LoginPanel component', () => {
  const onSubmitMock = jest.fn();
  const wrapper = Enzyme.shallow(
    <LoginPanel
      title="Githun Insights"
      hint="Please login to get insights for your github account."
      logo="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/github-octocat.svg"
      error={false}
      loading={false}
      errorMessage="something went wrong, please try again."
      failedLoginMessage="username or password is invalid. please try again."
      failedLogin={false}
      onSubmit={onSubmitMock}
    />,
  );

  it('calls onSubmit handler when the form is submitted', () => {
    const mockEvent = {
      preventDefault: () => undefined,
    };

    expect(wrapper.find('form').simulate('submit', mockEvent));
    expect(onSubmitMock.mock.calls.length).toBe(1);
  });
});

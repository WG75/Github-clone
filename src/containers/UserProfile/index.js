// @flow

import React from 'react';
import { connect } from 'react-redux';
import { loadProfile } from './actions';
import User from '../../components/User';

type Props = {
  getRepos: (user: string) => void,
  user: any,
  repos: Array<any>,
  loading: boolean,
  error: boolean,
  profile?: string,
};

class UserProfile extends React.Component<Props> {
  componentDidMount() {
    const { profileName } = this.props;
    if (this.props.loadProfile) {
      this.props.loadProfile(profileName);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profileName !== this.props.profileName) {
      this.props.loadProfile(nextProps.profileName);
    }
  }

  render() {
    const { profile, loading, error } = this.props;
    return <User user={profile} loading={loading} error={error} {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile.data,
    loading: state.profile.loading,
    error: state.profile.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProfile: user => dispatch(loadProfile(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);

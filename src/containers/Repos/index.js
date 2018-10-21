// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getRepos } from './actions';
import ReposList from '../../components/ReposList';

type Props = {
  getRepos: (user: string) => void,
  user: any,
  repos: Array<any>,
  loading: boolean,
  error: boolean,
  profile?: string,
};

class Repos extends React.Component<Props> {
  componentDidMount() {
    const { getRepos, user, profile } = this.props;
    if (this.props.getRepos) {
      this.props.getRepos(profile || user.login);
    }
  }

  render() {
    const { repos, loading, error } = this.props;

    return <ReposList repos={repos} loading={loading} error={error}/>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.global.user,
    repos: state.repos.data,
    loading: state.repos.loading,
    error: state.repos.error,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRepos: user => dispatch(getRepos(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repos);

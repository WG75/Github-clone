// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getContributions } from './actions';
import CommitsChart from '../../components/CommitsChart';

type Props = {
  getContributions: (profileName: string) => void,
  profileName: string,
  contributions: Array<any>,
  loading: boolean,
  error: boolean,
};

class Contributions extends React.Component<Props> {
  componentDidMount() {
    const { getContributions, profileName } = this.props;
    if (this.props.getContributions) {
      this.props.getContributions(profileName);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profileName !== this.props.profileName) {
      this.props.getContributions(nextProps.profileName);
    }
  }

  render() {
    const { contributions } = this.props;
    return <CommitsChart contributions={contributions} {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    contributions: state.contributions.data,
    loading: state.contributions.loading,
    error: state.contributions.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContributions: profileName => dispatch(getContributions(profileName)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contributions);

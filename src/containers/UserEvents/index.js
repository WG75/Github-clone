// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getUserEvents } from './actions';
import RecentEvents from '../../components/RecentEvents';

type Props = {
  getUserEvents: (user: string) => void,
  user: any,
  events: Array<any>,
  loading: boolean,
  error: boolean,
};

class UserEvents extends React.Component<Props> {
  componentDidMount() {
    const { getUserEvents, user } = this.props;
    if (this.props.getUserEvents) {
      this.props.getUserEvents(user.login);
    }
  }

  render() {
    const { events, loading, error } = this.props;

    return <RecentEvents userEvents={events} loading={loading} error={error} />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.global.user,
    events: state.userEvents.data,
    loading: state.userEvents.loading,
    error: state.userEvents.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserEvents: user => dispatch(getUserEvents(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEvents);

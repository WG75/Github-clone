// @flow

import React from 'react';
import { connect } from 'react-redux';
import { getReceivedEvents } from './actions';
import EventsChart from '../../components/EventsChart';

type Props = {
  getReceivedEvents: (profileName: string) => void,
  profileName: string,
  eventsData: Array<any>,
  loading: boolean,
  error: boolean,
};

class ReceivedEvents extends React.Component<Props> {
  componentDidMount() {
    const { getReceivedEvents, profileName } = this.props;
    if (this.props.getReceivedEvents) {
      this.props.getReceivedEvents(profileName);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profileName !== this.props.profileName) {
      this.props.getReceivedEvents(nextProps.profileName);
    }
  }

  render() {
    const { eventsData } = this.props;
    return <EventsChart  {...this.props} topUsers={eventsData}/>;
  }
}

function mapStateToProps(state) {
  return {
    eventsData: state.receivedEvents.data,
    loading: state.receivedEvents.loading,
    error: state.receivedEvents.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getReceivedEvents: profileName => dispatch(getReceivedEvents(profileName)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReceivedEvents);

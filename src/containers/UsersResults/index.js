// @flow

import React from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../Search/actions';
import Users from '../../components/Users';

type Props = {
  onScroll: (value: string, page: number) => void,
  results: Array<any>,
  loading: boolean,
  error: boolean,
  success: boolean,
  page: number,
  lastPage: number,
  query: string,
};

class UsersResults extends React.Component<Props> {
  scollableContainer: { [string]: number };

  handleScroll() {
    const {
      page, lastPage, loading, onScroll, query,
    } = this.props;
    const moreThan500pxToBottom = this.scollableContainer.scrollTop + this.scollableContainer.clientHeight
      < this.scollableContainer.scrollHeight - 500;

    if (page + 1 > lastPage || moreThan500pxToBottom || loading) {
      return null;
    }
    onScroll(query, page + 1);
  }

  render() {
    const {
      results, loading, error, page, query, lastPage,
    } = this.props;

    return (
      <Users
        scrollableRef={(node) => {
          this.scollableContainer = node;
        }}
        users={results}
        {...this.props}
        onScroll={this.handleScroll.bind(this)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.search.results,
    loading: state.search.loading,
    success: state.search.success,
    error: state.search.error,
    page: state.search.page,
    lastPage: state.search.lastPage,
    query: state.search.query,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onScroll: (query: string, page: number) => dispatch(searchUsers(query, page)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersResults);

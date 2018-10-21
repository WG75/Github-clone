// @flow

import React from 'react';
import { connect } from 'react-redux';
import { searchUsers, blurSearch, focusSearch } from './actions';
import SearchInput from '../../components/SearchInput';

type Props = {
  searchUsers: (query: string) => void,
  results: Array<any>,
  loading: boolean,
  error: boolean,
  success: boolean,
  withResults?: boolean,
  query: string,
  lastPage: number,
  onChnage: (value: string, page: number) => void,
  onFocus: () => void,
  onBlur: () => void,
};

class Search extends React.Component<Props> {
  delayTimer: TimeoutID;

  handleOnBlur() {
    const {
      results, onBlur, loading, query,
    } = this.props;
    if (results.length > 0 || loading || query) return;

    if (onBlur) {
      onBlur();
    }
  }

  handleOnFocus() {
    const {
      results, onFocus, loading, query,
    } = this.props;
    if (results.length > 0 || loading || query) return;

    if (onFocus) {
      onFocus();
    }
  }

  handleOnChange(query) {
    clearTimeout(this.delayTimer);

    this.delayTimer = setTimeout(() => {
      this.props.onChnage(query, 1);
    }, 500);
  }

  render() {
    const {
      results, loading, error, onChnage, onFocus, onBlur,
    } = this.props;

    return (
      <SearchInput
        onChange={this.handleOnChange.bind(this)}
        onFocus={this.handleOnFocus.bind(this)}
        onBlur={this.handleOnBlur.bind(this)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.global.user,
    results: state.search.results,
    loading: state.search.loading,
    success: state.search.success,
    query: state.search.query,
    page: state.search.page,
    lastPage: state.search.lastPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChnage: (query, page) => dispatch(searchUsers(query, page)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

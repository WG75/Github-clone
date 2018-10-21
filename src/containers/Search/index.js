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
  isFocused?: boolean,
  withResults?: boolean,
  query: string,
  page: number,
  onChnage: (value: string, page: number) => void,
  onFocus: () => void,
  onBlur: () => void,
};

class Search extends React.Component<Props> {
  render() {
    const {
      results, loading, error, onChnage, onFocus, onBlur,
    } = this.props;

    return <SearchInput onChange={query => onChnage(query, 1)} onFocus={onFocus} onBlur={onBlur} />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.global.user,
    results: state.search.results,
    loading: state.search.loading,
    success: state.search.success,
    isFocused: state.search.isFocused,
    query: state.search.query,
    page: state.search.page,
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

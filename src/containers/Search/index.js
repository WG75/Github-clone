// @flow

import React from 'react';
import { connect } from 'react-redux';
import { searchUsers, blurSearch, focusSearch } from './actions';
import SearchInput from '../../components/SearchInput';
import SearchResults from '../../components/SearchResults';

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
  searchIsFocused: boolean,
};

class Search extends React.Component<Props> {
  delayTimer: TimeoutID;

  handleOnBlur(e) {
    const {
      results, onBlur, loading, query, withResults,
    } = this.props;

    if (withResults && onBlur && !results.length > 0) {
      return onBlur();
    }

    if (results.length > 0 || loading || query) return;

    return onBlur();
  }

  handleOnFocus() {
    const {
      results, onFocus, loading, query, withResults,
    } = this.props;

    if (withResults && onFocus) {
      return onFocus();
    }

    if (results.length > 0 || loading || query) return;

    return onFocus();
  }

  handleOnChange(query, page) {
    clearTimeout(this.delayTimer);

    this.delayTimer = setTimeout(() => {
      this.props.onChnage(query, page || 1);
    }, 500);
  }

  onSelectUser() {
    this.inputRef.value = '';
    this.handleOnChange('');
  }

  render() {
    const {
      results,
      loading,
      error,
      onChnage,
      onFocus,
      onBlur,
      withResults,
      searchIsFocused,
    } = this.props;

    return (
      <div>
        <SearchInput
          inputRef={node => (this.inputRef = node)}
          onChange={this.handleOnChange.bind(this)}
          onFocus={this.handleOnFocus.bind(this)}
          onBlur={this.handleOnBlur.bind(this)}
        />
        {withResults
          && searchIsFocused && (
            <SearchResults
              {...this.props}
              onScroll={this.handleOnChange.bind(this)}
              onClick={this.onSelectUser.bind(this)}
            />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.global.user,
    results: state.search.results,
    loading: state.search.loading,
    success: state.search.success,
    error: state.search.error,

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

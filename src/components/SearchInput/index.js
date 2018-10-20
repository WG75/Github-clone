// @flow

import React from 'react';
import { ReactComponent as SearchIcon } from './search.svg';

import './SearchInput.css';

type Props = {
  onChange: (value: string) => void,
  onBlur: () => void,
  onFocus: () => void,
};

const SearchInput = ({ onChange, onFocus, onBlur }: Props) => (
  <label className="search" htmlFor="search">
    <input
      className="search__input"
      type="search"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder="Search users"
    />
    <SearchIcon className="search__icon" />
  </label>
);

export default SearchInput;

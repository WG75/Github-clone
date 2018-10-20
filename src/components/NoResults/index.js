// @flow

import React from 'react';
import './NoResults.css';

const NoResults = () => (
  <div className="no-results">
    <img
    className="no-results__image"
      src="https://pbs.twimg.com/media/B2gr3iwCYAA5GwG.png"
      alt="github logo"
    />
    <h3 className="no-results__hint">No results matched your search.</h3>
  </div>
);

export default NoResults;

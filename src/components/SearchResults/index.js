import React from 'react';
import { Link } from 'react-router-dom';
import PsuedoElement from '../PsuedoElemnt';
import NoResults from '../NoResults';
import './SearchResults.css';

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

class SearchResults extends React.Component<Props> {
  scollableContainer: { [string]: number };

  handleScroll() {
    const {
      page, lastPage, loading, onScroll, query,
    } = this.props;
    const moreThan200pxToBottom = this.scollableContainer.scrollTop + this.scollableContainer.clientHeight
      < this.scollableContainer.scrollHeight - 200;

    if (page + 1 > lastPage || moreThan200pxToBottom || loading) {
      return null;
    }
    onScroll(query, page + 1);
  }

  render() {
    const {
      results, loading, query, onClick,
    } = this.props;

    return results.length === 0 && !loading ? null : (
      <section
        className="dropdown-search"
        ref={node => (this.scollableContainer = node)}
        onClick={onClick}
        onScroll={this.handleScroll.bind(this)}
      >
        {results.length > 0 ? (
          <ul className="dropdown-search__list">
            {results.map(result => (
              <li className="dropdown-search__item">
                <Link className="dropdown-search__link" to={`/profile/${result.login}`}>
                  <div className="dropdown-search__user">
                    <img
                      className="dropdown-search__avatar"
                      src={result.avatar_url}
                      alt="user profile"
                    />
                    <h3 className="dropdown-search__username">{result.login}</h3>
                  </div>
                </Link>
              </li>
            ))}

            {loading && [...Array(10)].map(i => <PsuedoElement height={50} width={480} />)}
          </ul>
        ) : loading ? (
          <ul className="users__list">
            <li>
              {[...Array(10)].map(i => (
                <PsuedoElement height={50} width={480} />
              ))}
            </li>
          </ul>
        ) : null}

        {results.length === 0 && !loading && query && <NoResults />}

        {results.length === 0
          && !query && <p className="dropdown-search__hint">Start looking for users on github</p>}
      </section>
    );
  }
}

export default SearchResults;

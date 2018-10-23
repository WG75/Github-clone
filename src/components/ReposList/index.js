// @flow

import React from 'react';
import { ReactComponent as RepoIconPup } from './public-repo.svg';
import { ReactComponent as RepoIconPrivate } from './private-repo.svg';
import PsuedoElemnt from '../PsuedoElemnt';
import './ReposList.css';

type Props = {
  repos: any,
  loading: boolean,
};

const ReposList = ({ repos, loading, error }: Props) => (
  <section className="repos">
    <h3 className="repos__title">Repositories</h3>
    {repos.length > 0 && !loading ? (
      <ul className="repos__list">
        {repos.slice(0, 5).map((repo, i) => (
          <li key={repo.name + i} className="repos__item">
            {repo.private ? (
              <RepoIconPrivate className="repo__icon" fill="#fff" />
            ) : (
              <RepoIconPup className="repo__icon" fill="#b1b1b0" />
            )}
            <h3 className="repo__repo-name">{repo.name}</h3>
          </li>
        ))}
      </ul>
    ) : null}
    {repos.length === 0 && !loading && !error ? (
      <p className="repos-list__feedback">It looks like you don't have any repostories.</p>
    ) : null}

    {error && (
      <p className="repos-list__feedback repos-list__feedback--has-error">
        Something went wrong, please refresh the page.
      </p>
    )}

    {loading
      && [...Array(5)].map(i => (
        <PsuedoElemnt
          key={`psuedo${Math.random()}`}
          className="repos__psuedo-element"
          width={300}
          height={35}
          borderRadius={3}
          outerBackground="#403f3f"
          innerBackground="#3c3a3a"
        />
      ))}
  </section>
);

export default ReposList;

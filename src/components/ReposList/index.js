// @flow

import React from 'react';
import { ReactComponent as RepoIconPup } from './public-repo.svg';
import { ReactComponent as RepoIconPrivate } from './public-repo.svg';

import './ReposList.css';

type Props = {
  repos: any,
};

const ReposList = ({ repos }: Props) => (
  <section className="repos">
    <h3 className="repos__title">Repositories</h3>
    {repos.length > 0 ? (
      <ul className="repos__list">
        {repos.map(repo => (
          <li className="repos__item">
            {repo.private ? (
              <RepoIconPrivate className="repo__icon" fill="#fff" />
            ) : (
              <RepoIconPup className="repo__icon" fill="#b1b1b0" />
            )}
            <h3 className="repo__repo-name">{repo.name}</h3>
          </li>
        ))}
      </ul>
    ) : (
      <p className="repos-list__no-repos">It looks like you don't have any repostories.</p>
    )}
  </section>
);

export default ReposList;

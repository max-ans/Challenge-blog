import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

import './articles.scss';

const Articles = ({ posts }) => (
  <main className="articles">
    {posts.map((post) => (
      <Article
        key={post.id}
        {...post}
      />
    ))}
  </main>
);

Articles.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isrequired,
    }).isRequired,
  ).isRequired,
};

export default Articles;

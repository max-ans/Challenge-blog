import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

import './articles.scss';

const Articles = ({ posts, category }) => {
  useEffect(() => {
    document.title = category;
  }, [category]);

  return (
    <main className="articles">
      {posts.map((post) => (
        <Article
          key={post.id}
          {...post}
        />
      ))}
    </main>
  );
};

Articles.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isrequired,
    }).isRequired,
  ).isRequired,
  category: PropTypes.string.isRequired,
};

export default Articles;

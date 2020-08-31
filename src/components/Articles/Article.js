import React from 'react';
import PropTypes from 'prop-types';

import './articles.scss';

const Article = ({ title, category, excerpt }) => (
  <article className="article">
    <h2 className="article-title">
      {title}
    </h2>
    <div className="article-category">
      {category}
    </div>
    <p className="article-body">
      {excerpt}
    </p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Article;

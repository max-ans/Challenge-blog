import React from 'react';

import './singleArticle.scss';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getPostBySlug } from 'src/utils/selectors';

const SingleArticle = ({ articles }) => {
  console.log(articles);
  const { slug } = useParams();

  const article = getPostBySlug(slug, articles);

  console.log(article);
  return (
    <div className="single-article">
      <h3 className="article-title">{article.title}</h3>
      <p className="article-category">{article.category}</p>
      <p className="article-content">
        {article.content}
      </p>
    </div>
  );
};

SingleArticle.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SingleArticle;

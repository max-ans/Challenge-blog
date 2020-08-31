import React from 'react';
import postsList from 'src/data/posts';
import Article from './Article';

import './articles.scss';

const Articles = () => (
  <div className="articles">

    {postsList.map((post) => {
      const {
        id,
        title,
        category,
        excerpt,
      } = post;
      return (
        <Article
          key={id}
          title={title}
          category={category}
          excerpt={excerpt}
        />
      );
    })}
  </div>
);

export default Articles;

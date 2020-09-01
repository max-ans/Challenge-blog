import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import './articles.scss';

// exemple de faille XSS

// OWASP.COM

// lorsque le contenu reçue est interprèter avec dangerouslySetInnerHtml
// sans être néttoyer, Si un article de la catégories O'clock est present
// sur la page, Nous somme directement rediriger vers le site O'clock.io .
// c'est une faille XSS
// Pour contrer le problème, on utilise la librairie DOMPurify, qui va
// néttoyer (et réparer, si il manque une balise fermante par exemple)
// le texte de toutes les balise et autre chose qui pourraient
// être executés. C'est le travail de la fonction sanitize de DOMPurify.
function createMarkup(content) {
  return {
    __html: DOMPurify.sanitize(content),
  };
}

const Article = ({
  title,
  category,
  excerpt,
  slug,
}) => (
  <article className="article">
    <Link
      to={`/article/${slug}`}
    >
      <h2 className="article-title">
        {title}
      </h2>
      <div className="article-category">
        {category}
      </div>
      <p className="article-body" dangerouslySetInnerHTML={createMarkup(excerpt)} />
    </Link>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Article;

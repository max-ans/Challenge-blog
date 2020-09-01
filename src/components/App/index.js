// == Import npm
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Articles from 'src/components/Articles';
import Loader from 'src/components/Loader';

import categoriesData from 'src/data/categories';
// import postsData from 'src/data/posts';
import './styles.scss';

import { getPostsByCategory } from 'src/utils/selectors';
// == Composant
const App = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [displayError, setDisplayError] = useState(false);

  const loadPosts = () => {
    axios.get('https://oclock-open-apis.now.sh/api/blog/posts')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.warn(error);
        setDisplayError(true);
      })
      .finally(() => {
        console.log('.finally');
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <Header categories={categoriesData} />
      <div className="app-action">
        <button
          type="button"
          onClick={loadPosts}
          className="app-button"
        >
          Charger les articles
        </button>
      </div>
      { loading && <Loader />}
      {displayError && <div>Une erreur est survenue</div>}
      <Switch>
        {categoriesData.map((category) => (
          <Route key={category.label} exact path={category.route}>
            <Articles posts={getPostsByCategory(category.label, posts)} />
          </Route>
        ))}
        <Route path="/reactJS">
          <Redirect to="/react" />
        </Route>
        <Route>
          <div>  poop poop poop pousse toi de la , rien ici </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
// == Export
export default App;

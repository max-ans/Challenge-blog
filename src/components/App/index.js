// == Import npm
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Articles from 'src/components/Articles';
import Loader from 'src/components/Loader';

// import categoriesData from 'src/data/categories';
// import postsData from 'src/data/posts';
import './styles.scss';

import { getPostsByCategory } from 'src/utils/selectors';
// == Composant
const App = () => {
  const [categories, setcategories] = useState([]);

  const [loaderCategories, setLoaderCategories] = useState(true);

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [displayError, setDisplayError] = useState(false);

  const loadPosts = () => {
    axios.get('https://oclock-open-apis.now.sh/api/blog/posts')
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.warn(error);
        setDisplayError(true);
      })
      .finally(() => {
        // console.log('.finally');
        setLoading(false);
      });
  };

  const loadCategories = () => {
    axios.get('https://oclock-open-apis.now.sh/api/blog/categories')
      .then((response) => {
        // console.log(response);
        setcategories(response.data);
      })
      .catch((error) => {
        console.warn(error);
        setDisplayError(true);
      })
      .finally(() => {
        setLoaderCategories(false);
      });
  };

  // Ici le useEffect() aura lieu a chaque fois que le composant sera
  // rendu. aucune dépendance ne lui est lié. On peut comparer ce useEffect
  // a l'addition de componentDidMount et ComponentDidUpdate
  // useEffect(() => {
  //   console.log('useEffect() ====> componentDidMount && componentDidUpdate');
  // });

  // Ici le useEffect() aura lieu uniquement quand le sa dépendance aura
  // changer. La dépandance fournis a cette méthode est un éléments du state,
  // Cette fonction peut etre comparable a componentDidUpdate
  // useEffect(() => {
  //   console.log('useEffect() ====> componentDidUpdate');
  // }, [posts]);

  // Ici le useEffect aura lieu uniquement lors du premier rendu du composant.
  // la dépendance fournis a cette fonction est un tableau vide, donc on
  // on appelera une fois le useEffect lors du premier rendu du composant,
  // puisque le useEffect est appelé achaque évolution de sa dépendance, ici
  // un tableau vide qui ne change pas .
  useEffect(() => {
    console.log('useEffect() ====> componentDidMount');
    loadPosts();
    loadCategories();
  }, []);

  return (
    <div className="app">
      <Header categories={categories} />
      { (loading || loaderCategories) && <Loader />}
      {displayError && <div>Une erreur est survenue</div>}
      {!loading && !loaderCategories && (
      <Switch>
          {categories.map((category) => (
            <Route key={category.label} exact path={category.route}>
              <Articles
                posts={getPostsByCategory(category.label, posts)}
                category={category.label}
              />
            </Route>
          ))}
        <Route path="/reactJS">
          <Redirect to="/react" />
        </Route>
        <Route>
          <div>  poop poop poop pousse toi de la , rien ici </div>
        </Route>
      </Switch>
      )}
      <Footer />
    </div>
  );
};
// == Export
export default App;

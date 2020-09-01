// == Import npm
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Articles from 'src/components/Articles';

import categoriesData from 'src/data/categories';
// import postsData from 'src/data/posts';
import './styles.scss';

import { getPostsByCategory } from 'src/utils/selectors';
// == Composant
const App = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const loadPosts = () => {
    console.log('chargement');
    setLoading(!loading);
  };

  return (
    <div className="app">
      <Header categories={categoriesData} />
      <button type="button" onClick={loadPosts}>Charger les articles</button>
      { loading && <div>Chargement en cours.... </div>}
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
}
// == Export
export default App;

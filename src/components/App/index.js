// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Articles from 'src/components/Articles';

import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header categories={categoriesData} />
    <Articles posts={postsData} />
    <Footer />
  </div>
);

// == Export
export default App;

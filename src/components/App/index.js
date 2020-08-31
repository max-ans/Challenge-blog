// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Articles from 'src/components/Articles';
// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Articles />
  </div>
);

// == Export
export default App;

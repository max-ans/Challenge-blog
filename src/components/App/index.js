// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Articles from 'src/components/Articles';
import Footer from 'src/components/Footer';
// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Articles />
    <Footer />
  </div>
);

// == Export
export default App;

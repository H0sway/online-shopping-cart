// Import dependencies
import React, { Component } from 'react';

// Import Stylesheet
import './App.css';

// Import Components
import Header from './components/Header';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import ItemList from './components/ItemList';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ItemList />
        <Contact />
        <Checkout />
      </div>
    );
  }
}

export default App;

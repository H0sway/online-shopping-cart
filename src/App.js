// Import dependencies
import React, { Component } from 'react';

// Import Stylesheet
import './App.css';

// Import Components
import Header from './components/Header';

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
      </div>
    );
  }
}

export default App;

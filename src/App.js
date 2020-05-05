// Import dependencies
import React, { Component } from 'react';

// Import Stylesheet
import './App.css';

// Import Bootstrap Grid
import { Container } from 'react-bootstrap';

// Import Components
import Header from './components/Header';

import ItemList from './components/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <ItemList />
        </Container>
      </div>
    );
  }
}

export default App;

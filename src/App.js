// Import dependencies
import React, { Component } from 'react';

// Import Stylesheet
import './App.css';

// Import Bootstrap Grid
import { Grid } from 'react-bootstrap';

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
        <Grid>
          <Header />
          <ItemList />
        </Grid>
      </div>
    );
  }
}

export default App;

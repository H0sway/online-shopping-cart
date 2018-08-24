// Import dependencies
import React, { Component } from 'react';

// Import Stylesheet
import './App.css';

// Import Components
import Header from './components/Header';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import ItemList from './components/ItemList';

// Import images for each of the shopping list items
import cotton from './components/images/cotton_tshirt.png';
import girlst from './components/images/girls_t.png';
import flower from './components/images/flower_shirt.png';
import checkered from './components/images/check_tshirt.png';

let shoppingList = [
  {
    name: "COTTON TSHIRT",
    color: "blue",
    photoUrl: {cotton},
    size: "S",
    quantity: 1,
    price: 11.00
  },
  {
    name: "PRINT GIRLS T",
    color: "pink",
    photoUrl: {girlst},
    size: "S",
    quantity: 1,
    price: 17.00
  },
  {
    name: "FLOWER PATTERN SHIRT",
    color: "blue",
    photoUrl: {flower},
    size: "S",
    quantity: 1,
    price: 9.00
  },
  {
    name: "CHECK PATTERN TSHIRT",
    color: "red",
    photoUrl: {checkered},
    size: "S",
    quantity: 1,
    price: 22.00
  }
]

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ItemList
          shoppingList={shoppingList}
        />
        <Contact />
        <Checkout />
      </div>
    );
  }
}

export default App;

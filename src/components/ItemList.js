// Import React
import React, { Component } from 'react';

// List of shopping cart items
const shoppingList = {
  {
    name = "COTTON TSHIRT",
    color = "blue"
    photoUrl = ""
    size = "S"
    quantity = 1
    price = 11.00
  },
  {
    name = "PRINT GIRLS T",
    color = "pink"
    photoUrl = ""
    size = "S"
    quantity = 1
    price = 17.00
  },
  {
    name = "FLOWER PATTERN SHIRT",
    color = "blue"
    photoUrl = ""
    size = "S"
    quantity = 1
    price = 9.00
  },
  {
    name = "CHECK PATTERN TSHIRT",
    color = "red"
    photoUrl = ""
    size = "S"
    quantity = 1
    price = 22.00
  }
}

// Component that renders the entire list of shopping cart items.
class ItemList extends Component {
  render() {
    return(
      <div className="ItemList">

      </div>
    )
  }
}

export default ItemList;

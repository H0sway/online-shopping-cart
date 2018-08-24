// Import React
import React, { Component } from 'react';

// import bootstrap components
import { Table } from 'react-bootstrap';

// Import photos for each of the shopping list items
import cotton from './images/cotton_tshirt.jpg';
import girlst from './images/girls_t.jpg';
import flower from './images/flower_shirt.jpeg';
import checkered from './images/check_tshirt.jpg';

// Import the SingleItem component, this will be used as the template for each item in the shopping cart.
// import SingleItem from "./SingleItem";

// List of shopping cart items
const shoppingList = [
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

// Component that renders the entire list of shopping cart items.
class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      length: shoppingList.length
    }
  }
  renderList() {

  }
  render() {
    return(
      <div className="ItemList">
        <Table responsive>
          <thead>
            <tr>
              <th>{this.state.length}</th>
            </tr>
          </thead>
        </Table>
      </div>
    )
  }
}

export default ItemList;

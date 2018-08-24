// Import React
import React, { Component } from 'react';

// import bootstrap components
import { Table } from 'react-bootstrap';

// Import images for each of the shopping list items
import cotton from './images/cotton_tshirt.png';
import girlst from './images/girls_t.png';
import flower from './images/flower_shirt.png';
import checkered from './images/check_tshirt.png';

// Import the SingleItem component, this will be used as the template for each item in the shopping cart.
import SingleItem from "./SingleItem";

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
      list: shoppingList,
    }
  }
  renderList() {
    if (this.state.list.length) {
      return this.state.list.map((item, i) => {
        return (
          <SingleItem
            key={i}
            name={item.name}
            color={item.color}
            photoUrl={item.photoUrl}
            size={item.size}
            quantity={item.quantity}
            price={item.price.toFixed(2)}
          />
        )
      })
    }
    else {
      return (
        <div className="empty-list">
          <p>There's nothing in your cart.</p>
        </div>
      )
    }
  }
  render() {
    return(
      <div className="Item-List">
        <Table responsive>
          <thead>
            <tr>
              <th>{this.state.list.length} Items</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          {this.renderList()}
        </Table>
      </div>
    )
  }
}

export default ItemList;

// Import React
import React, { Component } from 'react';

// import bootstrap components
import { Table } from 'react-bootstrap';

// Import the SingleItem component, this will be used as the template for each item in the shopping cart.
import SingleItem from "./SingleItem";
import Checkout from "./Checkout";
import Contact from "./Contact";

// List of shopping cart items
const shoppingList = [
  {
    name: "COTTON TSHIRT",
    short: "cotton",
    color: "blue",
    photoUrl: "./images/cotton_tshirt.png",
    size: "S",
    quantity: 1,
    price: 11.00,
    totalCost: 11.00
  },
  {
    name: "PRINT GIRLS T",
    short: "girlst",
    color: "pink",
    photoUrl: "./images/girls_t.png",
    size: "S",
    quantity: 1,
    price: 17.00,
    totalCost: 17.00
  },
  {
    name: "FLOWER PATTERN SHIRT",
    short: "flower",
    color: "blue",
    photoUrl: "./images/flower_shirt.png",
    size: "S",
    quantity: 1,
    price: 9.00,
    totalCost: 9.00
  },
  {
    name: "CHECK PATTERN TSHIRT",
    short: "checkered",
    color: "red",
    photoUrl: "./images/check_tshirt.png",
    size: "S",
    quantity: 1,
    price: 22.00,
    totalCost: 22.00
  }
]

// Component that renders the entire list of shopping cart items.
class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: shoppingList,
      subtotal: null
    }
    this.removeItem = this.removeItem.bind(this);
    this.changeCost = this.changeCost.bind(this);
  }

  // Remove a specific item from the list when you click on X Remove
  removeItem(val) {
    const newList = this.state.shoppingCart.filter((item, i) => {
      return i !== val;
    });
    // console.log(newList, val);
    this.setState({
      list: newList
    })
  }

  // Specific event handler for when the total cost has to be recalculated
  changeCost(e) {
    const name = e.target.name;
    let amount = e.target.value;
    this.setState({
      [name]: amount
    })
  }

  renderList() {
    // Map this.state.list, creating an individual item for each object in the array. For each item a SingleItem component is rendered.
    // Props are used in the SingleItem component
    if (this.state.shoppingCart.length) {
      console.log(this.state.shoppingCart);
      const list = this.state.shoppingCart;
      return list.map((item, i) => {
        return (
          <SingleItem
            key={i}
            value={i}
            name={item.name}
            short={item.short}
            color={item.color}
            photoUrl={item.photoUrl}
            size={item.size}
            quantity={item.quantity}
            otherName={item.short + "Amount"}
            price={item.price.toFixed(2)}
            cost={parseInt(item.price)}
            removeItem={this.removeItem}
            changeCost={this.changeCost}
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

  calculateSubtotal(cart) {
    const list = cart;
    let newSubtotal = list.reduce((total, item) => {
      return total + item.totalCost;
    },0);
    const subtotal = newSubtotal;
    console.log(subtotal);
    return subtotal;
  }

  render() {
    return(
      <div className="Item-List">
        <Table responsive>
          <thead>
            <tr>
              <th>{this.state.length} Items</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          {this.renderList()}
        </Table>
        <div className="wrapper">
          <Contact />
          <Checkout
            calculateSubtotal={this.calculateSubtotal}
            cart={this.state.shoppingCart}
          />
        </div>
      </div>
    )
  }
}

export default ItemList;

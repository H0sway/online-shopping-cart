// Import React
import React, { Component } from 'react';

// import bootstrap components
import { Table } from 'react-bootstrap';

// Import images
import cotton from './images/cotton_tshirt.png';
import girlst from './images/girls_t.png';
import flower from './images/flower_shirt.png';
import checkered from './images/check_tshirt.png';

// Import the SingleItem component, this will be used as the template for each item in the shopping cart.
import SingleItem from "./SingleItem";
import Checkout from "./Checkout";
import Contact from "./Contact";

// Component that renders the entire list of shopping cart items.
class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      cottonRender: true,
      cottonQuantity: 1,
      cottonTotal: 11.00,
      girlstRender: true,
      girlstQuantity: 1,
      girlstTotal: 17.00,
      flowerRender: true,
      flowerQuantity: 1,
      flowerTotal: 9.00,
      checkeredRender: true,
      checkeredQuantity: 1,
      checkeredTotal: 22.00,
      newSubtotal: false,
      subtotal: 0
    }
    // Bind event listeners.
    this.handleChange = this.handleChange.bind(this);
    this.removeCotton = this.removeCotton.bind(this);
    this.removeGirlst = this.removeGirlst.bind(this);
    this.removeFlower = this.removeFlower.bind(this);
    this.removeCheckered = this.removeCheckered.bind(this);
    this.calculateSubtotal = this.calculateSubtotal.bind(this);
  }

  // Handle the form changes, keep them updated and saved to state.
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      newSubtotal: true,
    })
  }

  // Remove a specific item from the list when you click on X Remove
  removeCotton() {
    this.setState({
      cottonRender: false,
      cottonQuantity: 0
    })
  }

  removeGirlst() {
    this.setState({
      girlstRender: false,
      girlstQuantity: 0
    })
  }

  removeFlower() {
    this.setState({
      flowerRender: false,
      flowerQuantity: 0
    })
  }

  removeCheckered() {
    this.setState({
      checkeredRender: false,
      checkeredQuantity: 0
    })
  }

  calculateSubtotal(cotton, girlst, flower, checkered) {
    // Calculate the total for each individual component
    const cottonTotal = cotton * 11.00;
    const girlstTotal = girlst * 17.00;
    const flowerTotal = flower * 9.00;
    const checkeredTotal = checkered * 22.00;

    // Find the subtotal before discount
    const subtotal = cottonTotal + girlstTotal + flowerTotal + checkeredTotal;
    this.setState({
      subtotal: subtotal,
      newSubtotal: false,
    })
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
          {this.state.cottonRender ?
            <SingleItem
              name="COTTON TSHIRT"
              color="blue"
              photo={cotton}
              size="S"
              quantity={this.state.cottonQuantity}
              otherName="cottonQuantity"
              price="11.00"
              totalCost={this.state.cottonTotal}
              removeItem={this.removeCotton}
              handleChange={this.handleChange}
            /> : ''
          }
          {this.state.girlstRender ?
            <SingleItem
              name="PRINT GIRLS T"
              color="pink"
              photo={girlst}
              size="S"
              quantity={this.state.girlstQuantity}
              otherName="girlstQuantity"
              price="17.00"
              totalCost={this.state.girlstTotal}
              removeItem={this.removeGirlst}
              handleChange={this.handleChange}
            /> : ''
          }
          {this.state.flowerRender ?
            <SingleItem
              name="FLOWER PATTERN SHIRT"
              color="blue"
              photo={flower}
              size="S"
              quantity={this.state.flowerQuantity}
              otherName="flowerQuantity"
              price="9.00"
              totalCost={this.state.flowerTotal}
              removeItem={this.removeFlower}
              handleChange={this.handleChange}
            /> : ''
          }
          {this.state.checkeredRender ?
            <SingleItem
              name="CHECK PATTERN TSHIRT"
              color="red"
              photo={checkered}
              size="S"
              quantity={this.state.checkeredQuantity}
              otherName="checkeredQuantity"
              price="22.00"
              totalCost={this.state.checkeredTotal}
              removeItem={this.removeCheckered}
              handleChange={this.handleChange}
            /> : ''}
        </Table>
        <div className="wrapper">
          <Contact />
          <Checkout
            calculateSubtotal={this.calculateSubtotal}
            cotton={this.state.cottonQuantity}
            girlst={this.state.girlstQuantity}
            flower={this.state.flowerQuantity}
            checkered={this.state.checkeredQuantity}
            newSubtotal={this.state.newSubtotal}
            subtotal={(this.state.subtotal).toFixed(2)}
          />
        </div>
      </div>
    )
  }
}

export default ItemList;

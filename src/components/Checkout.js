// Import React
import React, { Component } from 'react';

// Import bootstrap grid Components
import { Grid, Col, Row, Button } from 'react-bootstrap'

// Component that renders the checkout functionality for the site. Right now it only calculates the total cost.
class Checkout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="Checkout">
        <p>ENTER PROMOTION CODE OR GIFT CARD</p>
        <form>
          <input placeholder="Enter Code" />
          <Button>APPLY</Button>
        </form>
        <div className="checkout-flex">
          <p>SUB TOTAL: ${this.props.calculateSubtotal(this.props.cart)}</p>
          <p>PROMOTION CODE ____ APPLIED</p>
          <p>ESTIMATED SHIPPING*</p>
          <p>You qualify for free shipping because your order is over $50</p>
          <hr />
          <p>ESTIMATED TOTAL</p>
          <p>Tax will be applied during checkout</p>
          <hr />
          <a href="#">CONTINUE SHOPPING</a>
          <Button bsStyle="primary">CHECKOUT</Button>
          <p><i className="fas fa-lock"></i>Secure checkout. Shopping is always safe & secure</p>
        </div>
      </div>
    )
  }
}

export default Checkout;

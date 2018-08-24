// Import React
import React, { Component } from 'react';

// Component that renders the checkout functionality for the site. Right now it only calculates the total cost.
class Checkout extends Component {
  render() {
    return(
      <div className="Checkout">
        <p>ENTER PROMOTION CODE OR GIFT CARD</p>
        <form>
          <input placeholder="Enter Code" />
          <button>APPLY</button>
        </form>

        <p>SUB TOTAL</p>
        <p>PROMOTION CODE ____ APPLIED</p>
        <p>ESTIMATED SHIPPING*</p>
        <p>You qualify for free shipping because your order is over $50</p>
        <hr />
        <p>ESTIMAED TOTAL</p>
        <p>Tax will be applied during checkout</p>
        <hr />
        <a href="#">CONTINUE SHOPPING</a>
        <button>CHECKOUT</button>
        <p><i className="fas fa-lock"></i>Secure checkout. Shopping is always safe & secure</p>
      </div>
    )
  }
}

export default Checkout;

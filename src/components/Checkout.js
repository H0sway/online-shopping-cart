// Import React
import React, { Component } from 'react';

// Import bootstrap grid Components
import { Grid, Col, Row, Button } from 'react-bootstrap'

// Component that renders the checkout functionality for the site. Right now it only calculates the total cost.
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promo: "AJS49",
    }
    this.handleChange = this.handleChange.bind(this);
    this.enterPromo = this.enterPromo.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  enterPromo() {
    alert("You succesfully entered a promotion code!");
  }

  componentDidMount() {
    this.props.calculateSubtotal(this.props.cotton, this.props.girlst, this.props.flower, this.props.checkered);
  }

  render() {
    if (this.props.newSubtotal) {
      this.props.calculateSubtotal(this.props.cotton, this.props.girlst, this.props.flower, this.props.checkered);
    }
    return(
      <div className="Checkout">
        <p>ENTER PROMOTION CODE OR GIFT CARD</p>
        <form>
          <input name="promo" onChange={this.handleChange} value={this.state.promo} />
          <Button onClick={this.enterPromo}>APPLY</Button>
        </form>
        <div className="checkout-flex">
          <p>SUB TOTAL: ${this.props.subtotal}</p>
          <p>PROMOTION CODE <strong>{this.state.promo}</strong> APPLIED</p>
          <p>ESTIMATED SHIPPING*</p>
          <p>*You qualify for free shipping because your order is over $50</p>
          <hr />
          <p>ESTIMATED TOTAL <strong>${(this.props.subtotal * .8).toFixed(2)}</strong></p>
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

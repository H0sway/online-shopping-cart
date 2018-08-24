// Import React
import React, { Component } from 'react';

// import bootstrap components
import { Image, Modal, Button } from 'react-bootstrap';


// This will be the template for every item in the shopping list.
class SingleItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      quantity: this.props.quantity,
      color: this.props.color,
      size: this.props.size,
      price: parseInt(this.props.price),
      cost: null
    }
    // Bind event handlers
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.productDetails = this.productDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeCost = this.changeCost.bind(this);
  }

  componentDidMount() {
    const cost = this.state.quantity * this.state.price;
    this.setState({
      cost: cost
    })
  }

  // Event methods for recognizing when something has changed.
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    })
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true });
  }

  changeCost(e) {
    console.log("Before " + this.state.cost);
    let amount = e.target.value;
    const price = parseInt(this.props.price);
    if (amount === null ) {
      amount = 0;
      const cost = amount * price;
      this.setState({
        quantity: amount,
        cost: cost
      })
    }
    else {
      const cost = amount * price;
      this.setState({
        quantity: amount,
        cost: cost
      });
    }
  }

  // Calculate the current cost for this component (the amount of product multiplied by the price)
  calculateCost() {
  }

  productDetails() {
    alert("You clicked on the product details!");
  }

  render() {
    return(
        <tbody className="Single-Item">
          <tr>
            <th>
              <p>{this.props.name}</p>
              <ul className="top">
                <li>Style #: MS13KT1906</li>
                <li>Color: <small>{this.state.color}</small></li>
              </ul>
              <ul className="bottom">
                <li className="edit" onClick={this.handleShow}>Edit</li>
                <li className="delete" onClick={() => this.props.removeItem(this.props.value)}>X Remove</li>
                <li className="save">Save For Later</li>
              </ul>
            </th>
            <th>{this.state.size}</th>
            <th><input name="quantity" type="number" value={this.state.quantity} onChange={this.changeCost}/></th>
            <th>$ <span>{this.props.price}</span></th>
          </tr>
          <Modal show={this.state.show} onHide={this.handleClose} className="item-modal">
            <Modal.Body>
              <h3 className="upwards">{this.props.name}</h3>
              <h1><small>$</small> {this.props.price}</h1>
              <h3>MS13KT1906</h3>
              <ul>
                <li><button className="red" name="color" onClick={this.handleChange} value="red"></button></li>
                <li><button className="pink" name="color" onClick={this.handleChange} value="pink"></button></li>
                <li><button className="blue" name="color" onClick={this.handleChange} value="blue"></button></li>
              </ul>
              <h3>Color: {this.state.color}</h3>
              <form>
                <select name="size" value={this.state.size} onChange={this.handleChange}>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                </select>
                <input name="quantity" type="number" value={this.state.quantity} onChange={this.changeCost} />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.handleClose}>Edit</Button>
              <p onClick={this.productDetails}>Check Product Details</p>
            </Modal.Footer>
          </Modal>
        </tbody>
    )
  }
}

export default SingleItem;

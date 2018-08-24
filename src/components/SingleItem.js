// Import React
import React, { Component } from 'react';

// import bootstrap components
import { Image, Modal, Button } from 'react-bootstrap';


// This will be the template for every item in the shopping list.
class SingleItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.productDetails = this.productDetails.bind(this);
  }
  handleClose() {
    this.setState({ show: false })
  }
  handleShow() {
    this.setState({ show: true });
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
                <li>Color: <small>{this.props.color}</small></li>
              </ul>
              <ul className="bottom">
                <li className="edit" onClick={this.handleShow}>Edit</li>
                <li className="delete" onClick={this.props.removeItem}>X Remove</li>
                <li className="save">Save For Later</li>
              </ul>
            </th>
            <th>{this.props.size}</th>
            <th><input name="quantity" type="number" defaultValue={this.props.quantity} /></th>
            <th>$ <span>{this.props.price}</span></th>
          </tr>
          <Modal show={this.state.show} onHide={this.handleClose} className="item-modal">
            <Modal.Body>
              <h3 className="upwards">{this.props.name}</h3>
              <h1><small>$</small> {this.props.price}</h1>
              <h3>MS13KT1906</h3>
              <ul>
                <li><button className="red"></button></li>
                <li><button className="pink"></button></li>
                <li><button className="blue"></button></li>
              </ul>
              <h3>Color: {this.props.color}</h3>
              <form>
                <select name="size" defaultValue={this.props.size}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <input name="quantity" type="number" defaultValue={this.props.quantity} />
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

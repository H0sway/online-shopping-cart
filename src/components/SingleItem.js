// Import React
import React, { Component } from 'react';

// import bootstrap components
import { Image, Modal, Button, Row, Col } from 'react-bootstrap';

// This will be the template for every item in the shopping list.
class SingleItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      color: this.props.color
    }
    // Bind event handlers
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.productDetails = this.productDetails.bind(this);
    this.handleLocalChange = this.handleLocalChange.bind(this);
  }

  // Handling event listeners that don't have any impact outside of the component
  handleLocalChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  // Opening and closing the modal
  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true });
  }

  // A little bonus alert
  productDetails() {
    alert("You clicked on the product details!");
  }

  render() {
    return(
        <tbody className="Single-Item">
          <tr>
            <th>
              <Image src={this.props.photo} responsive />
              <p>{this.props.name}</p>
              <ul className="top">
                <li>Style #: MS13KT1906</li>
                <li>Color: <small>{this.state.color}</small></li>
              </ul>
              <ul className="bottom">
                <li className="edit" onClick={this.handleShow}>Edit</li>
                <li className="delete" onClick={this.props.removeItem}>X Remove</li>
                <li className="save">Save For Later</li>
              </ul>
            </th>
            <th>{this.props.size}</th>
            <th><input className="quantity" name={this.props.otherName} type="number" min="0" value={this.props.quantity} onChange={this.props.handleChange}/></th>
            <th>$ <span>{this.props.price}</span></th>
          </tr>
          <Modal show={this.state.show} onHide={this.handleClose} className="item-modal">
            <Row>
              <Col xs={6}>
                <Modal.Body>
                  <h3 className="upwards">{this.props.name}</h3>
                  <h1><small>$</small> {this.props.price}</h1>
                  <h3>MS13KT1906</h3>
                  <ul>
                    <li><button className="red" name="color" onClick={this.handleLocalChange} value="red"></button></li>
                    <li><button className="pink" name="color" onClick={this.handleLocalChange} value="pink"></button></li>
                    <li><button className="blue" name="color" onClick={this.handleLocalChange} value="blue"></button></li>
                  </ul>
                  <h3>Color: {this.state.color}</h3>
                  <form>
                    <select name="size" value={this.state.size} onChange={this.handleChange}>
                      <option value="S">Small</option>
                      <option value="M">Medium</option>
                      <option value="L">Large</option>
                    </select>
                    <input name={this.props.otherName} type="number" min="0" step="1" value={this.props.quantity} onChange={this.props.handleChange} />
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button bsStyle="primary" onClick={this.handleClose}>Edit</Button>
                  <p onClick={this.productDetails}>Check Product Details</p>
                </Modal.Footer>
              </Col>
              <Col xs={4}>
                <Image src={this.props.photo} responsive />
              </Col>
            </Row>
          </Modal>
        </tbody>
    )
  }
}

export default SingleItem;

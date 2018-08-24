// Import React
import React, { Component } from 'react';

// import bootstrap components
import { Image, Modal, Button, Row, Col } from 'react-bootstrap';

// Import images
import cotton from './images/cotton_tshirt.png';
import girlst from './images/girls_t.png';
import flower from './images/flower_shirt.png';
import checkered from './images/check_tshirt.png';

// Put the images in an array
const images = [
  {
    img: {cotton}
  },
  {
    img: {girlst}
  },
  {
    img: {flower}
  },
  {
    img: {checkered}
  }
]

// This will be the template for every item in the shopping list.
class SingleItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      quantity: this.props.quantity,
      color: this.props.color,
      size: this.props.size,
      quantity: this.props.quantity,
      price: parseInt(this.props.price),
      photoUrl: this.props.photoUrl,
      cost: this.props.cost
    }
    // Bind event handlers
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.productDetails = this.productDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Event methods for recognizing when something has changed.
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    })
  }

  componentDidMount() {
    this.configurePhoto();
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

  configurePhoto() {
    const val = this.props.value;
    const short = this.props.short;
    const photo = images[val].img[short];
    this.setState({
      photoUrl: photo
    })
  }

  render() {
    return(
        <tbody className="Single-Item">
          <tr>
            <th>
              <p>{this.props.name}</p>
              <Image src={this.state.photoUrl} responsive />
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
            <th><input name={this.props.otherName} type="number" value={this.props.quantity} onChange={this.props.changeCost}/></th>
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
                    <input name={this.props.short + "Amount"} type="number" value={this.state.quantity} onChange={this.handleChange && this.props.changeCost} />
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button bsStyle="primary" onClick={this.handleClose}>Edit</Button>
                  <p onClick={this.productDetails}>Check Product Details</p>
                </Modal.Footer>
              </Col>
              <Col xs={4}>
                <Image src={this.state.photoUrl} responsive />
              </Col>
            </Row>
          </Modal>
        </tbody>
    )
  }
}

export default SingleItem;

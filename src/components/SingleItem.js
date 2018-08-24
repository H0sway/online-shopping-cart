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
  }
  render() {
    return(
        <tbody className="Single-Item">
          <tr>
            <th>
              <p>{this.props.name}</p>
              <ul className="top">
                <li>Style #: ms13kt1906</li>
                <li>Color: <small><bold>{this.props.color}</bold></small></li>
              </ul>
              <ul className="bottom">
                <li className="edit">Edit</li>
                <li className="delete">X Remove</li>
                <li className="save">Save For Later</li>
              </ul>
            </th>
            <th>{this.props.size}</th>
            <th><input type="number" value={this.props.quantity} /></th>
            <th>{this.props.price}</th>
          </tr>
        </tbody>
    )
  }
}

export default SingleItem;

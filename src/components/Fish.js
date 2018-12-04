import React, { Component } from 'react';
import { formatPrice } from "../helpers";

class Fish extends Component {
  render() {
    const image = this.props.details.image;
    const name = this.props.details.name;
    const price = this.props.details.price;
    const desc = this.props.details.desc;
    const status = this.props.details.status;
    return (
      <li className="menu-fish">
        <img src={image} alt={name}></img>
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
        
      </li>
    );
  }
}

export default Fish;


desc:
"Everyones favorite white fish. We will cut it to the size you need and ship it."
image:
"/images/hali.jpg"
name:
"Pacific Halibut"
price:
1724
status:
"available"
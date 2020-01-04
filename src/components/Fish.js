import React from "react";

import PropTypes from "prop-types";

import { formatPrice } from "../helpers";

//if it is a normal react component, so the propTypes will be in the component
//and it will be static (valid for every instance)
class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };

  render() {
    //how to insert unicode escape sequence (emoji):
    //return <div className="single-fish">&#x1F41F;</div>;

    //destructure multiple variables in one(easier to read, but not mandatory to do, ES6):
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={this.handleClick} disabled={!isAvailable}>
          {isAvailable ? "Add To Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;

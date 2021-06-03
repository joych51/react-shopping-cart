import React, { Component } from "react";
import Cart from "../components/Cart";
import Filter from "../components/Filter";
import Products from "../components/Products";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter />
            <Products
            //  addToCart = {this.addToCart}
            />
          </div>
          <div className="sidebar">
            <Cart
            // cartItems={this.state.cartItems}
            // removeFromCart={this.removeFromCart}
            // createOrder={this.createOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

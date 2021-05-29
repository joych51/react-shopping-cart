import React, { Component } from 'react'
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false
        };
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order);
    }

    render() {
        const { cartItems } = this.props;
        return (
            <div>
                {cartItems.length === 0
                    ? <div className="cart cart-header">Cart is empty</div>
                    : <div className="cart cart-header">You have {cartItems.length} items in the cart{" "}</div>
                }
                <div>
                    <div className="cart">
                        <Fade left cascade={true}>
                            <ul className="cart-items">
                                {cartItems.map((item) => (
                                    <li key={item._id} >
                                        <div>
                                            <img src={item.image}
                                                alt={item.title} />
                                        </div>
                                        <div>
                                            <div className="product-title">{item.title}</div>
                                            <div className="desc">{item.description}</div>
                                            <div className="right">
                                                {formatCurrency(item.price)} x {item.count} {" "}
                                                <button
                                                    className ="button"
                                                    onClick={() => this.props.removeFromCart(item)}>
                                                    Remove
                                            </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Fade>
                    </div>
                    {cartItems.length !== 0 && (
                        <div>
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total: {" "}
                                        {formatCurrency(cartItems.reduce((a, c) => a + (c.price * c.count), 0))}
                                    </div>
                                     <button
                                        onClick={() => {
                                            this.setState({ showCheckout: !this.state.showCheckout });
                                        }}
                                        className="button-primary">
                                        Proceed
                                </button>
                                </div>
                            </div>
                            {this.state.showCheckout && (
                                <Zoom>
                                    <div className="cart">
                                        <form onSubmit={this.createOrder}>
                                            <ul className="form-container">
                                                <li>
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        required onChange={this.handleInput}>
                                                    </input>
                                                </li>
                                                <li>
                                                    <input
                                                        name="name"
                                                        type="text"
                                                        placeholder="Full Name"
                                                        required onChange={this.handleInput}>
                                                    </input>
                                                </li>
                                                <li>
                                                    <input
                                                        name="address"
                                                        type="address"
                                                        placeholder="Address"
                                                        required onChange={this.handleInput}>
                                                    </input>
                                                </li>
                                                <li>
                                                    <button className="button-primary" type="submit">Checkout</button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </Zoom>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems,
}), {removeFromCart})(Cart);
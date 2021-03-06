import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrder } from '../actions/orderActions'
import formatCurrency from '../util';

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrder();
    }
    render() {
        var sales = 0;
        const { orders } = this.props;
        return (
            !orders ? <div>isLoading...</div>
            : <div className = "orders">
                <h2>Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                DATE
                            </th>
                            <th>
                                TOTAL
                            </th>
                            <th>
                                NAME
                            </th>
                            <th>
                                EMAIL
                            </th>
                            <th>
                                ADDRESS
                            </th>
                            <th>
                                ITEMS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr>
                                <td>{order._id}</td>
                                <td>{order.createdAt}</td>
                                <td>{formatCurrency(order.total)}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.cartItems.map((item) => (
                                    sales += (item.price * item.count),
                                    <div>
                                        {item.count} {" x "} {item.title}
                                    </div>
                                ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className = "sales">
                    <h2>Total Sales: <span>{formatCurrency(sales)}</span></h2>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    orders: state.order.orders
}), {fetchOrder})(Orders);
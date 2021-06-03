import React from "react";
import store from "./store";
import Home from './pages/Home';
import Admin from './pages/Admin';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     cartItems: localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : [],
  //   };
  // }
  // createOrder = (order) => {
  //   alert("Would you like to checkout ? ");
  // };

  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({
  //     cartItems: cartItems.filter((item) => item._id !== product._id),
  //   });
  //   localStorage.setItem(
  //     "cartItems",
  //     JSON.stringify(cartItems.filter((item) => item._id !== product._id))
  //   );
  // };

  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems: cartItems });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  // sortProducts = (e) => {
  //   const sort = e.target.value;
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products
  //       .slice()
  //       .sort((a, b) =>
  //         sort === "highest"
  //           ? a.price < b.price
  //             ? 1
  //             : -1
  //           : sort === "lowest"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : a._id > b._id
  //           ? 1
  //           : -1
  //       ),
  //   }));
  // };

  // filterProducts = (e) => {
  //   if (e.target.value === "") {
  //     this.setState({ size: e.target.value, products: data.products });
  //   } else {
  //     console.log(e.target.value);
  //     this.setState({
  //       size: e.target.value,
  //       products: data.products.filter(
  //         (product) => product.availableSizes.indexOf(e.target.value) >= 0
  //       ),
  //     });
  //   }
  // };

  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="grid-container">
          <header>
            <Link to="/">React Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            <Route path = "/admin" component = { Admin } />
            <Route path ="/" component = { Home } exact />
            
          </main>
          <footer>All right is reserved.</footer>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

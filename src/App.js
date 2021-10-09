import React from "react";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import { StateProvider } from "./StateManagement/Context";
import { BrowserRouter, Route,  Switch } from "react-router-dom";

const App = () => {
  return (
    <StateProvider>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/yourcart">
              <Nav />
              <Banner />
              <Cart />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/">
              <Nav />
              <Banner />
              <ProductList />
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </StateProvider>
  );
};

export default App;

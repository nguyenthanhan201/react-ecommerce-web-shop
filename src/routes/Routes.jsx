import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Register from "../pages/Register";
import Accessories from "../pages/Accessories";
import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/catalog/:slug" component={Product}></Route>
      <Route path="/catalog" exact component={Catalog}></Route>
      <Route path="/cart" exact component={Cart}></Route>
      <Route path="/accessories" exact component={Accessories}></Route>
      <Route path="/contact" exact component={Contact}></Route>
      <Route path="/register" exact component={Register}></Route>
    </Switch>
  );
};

export default Routes;

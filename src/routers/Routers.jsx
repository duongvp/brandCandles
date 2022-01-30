import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "../component/Detail";
import Home from "../component/Home";
import Cart from "../component/Cart";
import Payment from "../component/Payment";
import Products from "../component/Products";
import Account from "../component/Account";
import Registration from "../component/Registration";
import Login from "../component/Login";
import Searchpro from "../component/SearchPro";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/payment" element={<Payment />} />
      <Route exact path="/products/category/:nameCate" element={<Products />} />
      <Route exact path="/account" element={<Account />} />
      <Route exact path="/register" element={<Registration />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/search/:str" element={<Searchpro />} />
    </Routes>
  );
}

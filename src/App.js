import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Route>
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}

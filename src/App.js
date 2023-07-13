import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { nanoid } from "nanoid";

// 각 페이지에서 상품 리스트 값을 받아 사용하기 위해 App.js에 초기 상품 리스트 데이터 설정
const initialItems = [
  {
    id: nanoid(),
    name: "멋진 바지",
    price: "20,000",
    options: ["28", "30", "32"],
    likes: 100,
  },
  {
    id: nanoid(),
    name: "멋진 셔츠",
    price: "10,000",
    options: ["small", "medium", "large"],
    likes: 200,
  },
  {
    id: nanoid(),
    name: "멋진 바지",
    price: "30,000",
    options: ["230", "240", "250", "260", "270"],
    likes: 300,
  },
];

// 다른 페이지에서 받아 사용하기 위해 export default 사용
export default function App() {
  // 상품 리스트 상태와 해당 상태를 업데이트하는 함수
  const [items, setItems] = useState(initialItems);
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* items값을 다른 페이지에서 사용하기 위해 프롭스로 전달 */}
        <Route path="/" element={<Main items={items} />} />
        <Route path="/products" element={<Products items={items} setItems={setItems} />} />
        <Route path="/products/:id" element={<Product items={items} />} />
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

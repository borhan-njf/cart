import React from "react";
//react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";
//components
import ProductContextProvider from "./context/ProductContextProvider";
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/products" element={<Store />}></Route>
          //this is how i can redirect from any path to /products path
          <Route path="*" element={<Navigate to="/products" replace />}></Route>
        </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;

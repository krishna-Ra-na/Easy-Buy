import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsProvider from "./contexts/ProductsContext";
import CartProvider from "./contexts/CartContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

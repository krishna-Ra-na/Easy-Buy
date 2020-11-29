import React, { useState } from "react";
import Product from "./Product";
import Header from "./Header";
import data from "../data";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const [product, setProduct] = useState(data);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  return (
    <>
      <Header />
      <div className="card text-center">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <strong>Email :</strong> {currentUser.email}
      </div>
      <section className="section-margin calc-60px">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              <span className="section-intro__style">Product</span>
            </h2>
          </div>
          <div className="row">
            {product.map((item) => {
              return <Product item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

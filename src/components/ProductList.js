import React, { useContext, useState } from "react";
import Product from "./Product";
import { useAuth } from "../contexts/AuthContext";
import { ProductsContext } from "../contexts/ProductsContext";

function ProductList() {
  const { products } = useContext(ProductsContext);
  // console.log(products);
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  return (
    <>
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
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;

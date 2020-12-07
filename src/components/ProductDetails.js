import React, { useContext } from "react";
import "./ProductDetails.css";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { detailProduct, openModal } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const details = Object.values(detailProduct);
  const product = details[0];
  const { name, category, price, id, image } = product;
  return (
    <div className="product_image_area">
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="single-prd-item">
              <img className="img-fluid" src={image} alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h3>{name}</h3>
              <h2>$ {price}</h2>
              <ul className="list">
                <li>
                  <span>Category</span> : {category}
                </li>
                <li>
                  <span>Availibility</span> : In Stock
                </li>
              </ul>
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <div className="product_btn">
                <Link to="/">
                  <button className="button primary-btn">
                    Back to Products
                  </button>
                </Link>

                <span> </span>
                <button
                  className="button"
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      id,
                      product,
                      openModal,
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

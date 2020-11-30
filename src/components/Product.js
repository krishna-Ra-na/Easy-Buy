import React, { useContext } from "react";
import "./Product.css";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/CartContext";

function Product({ product }) {
  const { name, category, image, price, id } = product;

  const { dispatch } = useContext(CartContext);

  // const handleDetail = () => {
  //   console.log("hello from detail");
  // };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card text-center card-product">
        <div className="card-product__img">
          <img className="card-img" src={image} alt="" />
          <ul className="card-product__imgOverlay">
            <li>
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    id,
                    product,
                  });
                }}
              >
                <CgShoppingCart />
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <p>{category}</p>
          <h4 className="card-product__title">
            <a onClick={handleDetail}>{name}</a>
          </h4>
          <p className="card-product__price">$ {price}</p>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;

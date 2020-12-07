import React, { useContext } from "react";
import "./Product.css";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/CartContext";
import { ProductsContext } from "../contexts/ProductsContext";

function Product({ product }) {
  const { name, category, image, price, id } = product;
  const { handleDetail, openModal } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  // console.log(product);
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
                  openModal(id);
                }}
              >
                <CgShoppingCart />
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <p>{category}</p>
          <h4 className="card-product__title" onClick={() => handleDetail(id)}>
            <Link to="/Productdetails">{name}</Link>
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

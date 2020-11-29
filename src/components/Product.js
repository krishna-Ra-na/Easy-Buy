import React from "react";
import "./Product.css";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

function Product({ item }) {
  const { name, category, image, price } = item;
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card text-center card-product">
        <div className="card-product__img">
          <img className="card-img" src={image} alt="" />
          <ul className="card-product__imgOverlay">
            <li>
              <button>
                <CgShoppingCart />
              </button>
            </li>
            <li>
              <button>
                <AiOutlineHeart />
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <p>{category}</p>
          <h4 className="card-product__title">
            <a href="">{name}</a>
          </h4>
          <p className="card-product__price">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;

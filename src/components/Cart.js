import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../contexts/CartContext";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

function Cart() {
  const { shoppingCart, totalPrice, dispatch } = useContext(CartContext);
  console.log(shoppingCart);
  return (
    <section className="cart_area">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {shoppingCart.length > 0 ? (
                  shoppingCart.map((cart) => (
                    <tr key={cart.id}>
                      <td>
                        <div className="media">
                          <div className="d-flex">
                            <img src={cart.image} alt="" />
                          </div>
                          <div className="media-body">
                            <p>{cart.name}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h5>${cart.price}</h5>
                      </td>
                      <td>
                        <div className="product_count">
                          <span className="cart-qty">{cart.qty}</span>
                          <button
                            className="increase items-count"
                            type="button"
                            onClick={() =>
                              dispatch({ type: "INC", id: cart.id, cart })
                            }
                          >
                            <MdKeyboardArrowUp />
                            <i className="lnr lnr-chevron-up"></i>
                          </button>
                          <button
                            className="reduced items-count"
                            type="button"
                            onClick={() =>
                              dispatch({ type: "DEC", id: cart.id, cart })
                            }
                          >
                            <MdKeyboardArrowDown />
                          </button>
                        </div>
                      </td>
                      <td>
                        <h5>${cart.price * cart.qty}</h5>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="text-center">
                    <h1>Sorry Your Cart is Empty</h1>
                  </div>
                )}

                {/* <tr className="bottom_button">
                  <td>
                    <a className="button">Update Cart</a>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="cupon_text d-flex align-items-center">
                      <input type="text" placeholder="Coupon Code" />
                      <a className="primary-btn">Apply</a>
                      <a className="button">Have a Coupon?</a>
                    </div>
                  </td>
                </tr> */}
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>${totalPrice}</h5>
                  </td>
                </tr>
                {/* <tr className="shipping_area">
                  <td className="d-none d-md-block"></td>
                  <td></td>
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td>
                    <div className="shipping_box">
                      <ul className="list">
                        <li>
                          <a>Flat Rate: $5.00</a>
                        </li>
                        <li>
                          <a>Free Shipping</a>
                        </li>
                        <li>
                          <a>Flat Rate: $10.00</a>
                        </li>
                        <li className="active">
                          <a>Local Delivery: $2.00</a>
                        </li>
                      </ul>
                      <h6>
                        Calculate Shipping{" "}
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </h6>
                      <select className="shipping_select">
                        <option value="1">Bangladesh</option>
                        <option value="2">India</option>
                      </select>
                      <select className="shipping_select">
                        <option value="1">Select a State</option>
                        <option value="2">Select a State</option>
                      </select>
                      <input type="text" placeholder="Postcode/Zipcode" />
                      <a className="gray_btn">Update Details</a>
                    </div>
                  </td>
                </tr> */}
                <tr className="out_button_area">
                  <td className="d-none-l"></td>
                  <td className=""></td>
                  <td></td>
                  <td>
                    <div className="checkout_btn_inner d-flex align-items-center">
                      <a className="gray_btn">Continue Shopping</a>
                      <a className="primary-btn ml-2">Proceed to checkout</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;

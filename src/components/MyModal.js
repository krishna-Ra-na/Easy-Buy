import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

function MyModal() {
  const { closeModal, openModal, modalProduct, modalOpen } = useContext(
    ProductsContext
  );
  const { image, price, name } = modalProduct;

  return (
    <>
      <Modal modalOpen={modalOpen}>
        <Modal.Body>
          <h5>Item added to the cart</h5>
          <img src={image} alt="" />
          <h5>{name}</h5>
          <h5 className="text-muted">Price : $ {price}</h5>
        </Modal.Body>
        <Modal.Footer>
          <button className="button btn-sm" onClick={() => closeModal()}>
            Continue Shopping
          </button>
          <Link to="/cart">
            <button className="button btn-sm" onClick={closeModal()}>
              Go to cart
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;

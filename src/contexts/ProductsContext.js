import React, { createContext, useState } from "react";
import data from "../data";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products] = useState(data);
  const [detailProduct, setDetailProduct] = useState([""]);
  const [modalOpen, setModalOpen] = useState(true);
  const [modalProduct, setModalProduct] = useState([""]);

  // console.log(products);

  function getItem(id) {
    const product = products.find((item) => item.id === id);
    return product;
  }

  function handleDetail(id) {
    const product = getItem(id);
    setDetailProduct(() => {
      return { detailProduct: product };
    });
  }

  const openModal = (id) => {
    const product = getItem(id);
    setModalOpen(true);
    setModalProduct(product);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ProductsContext.Provider
      value={{
        products: [...products],
        detailProduct,
        handleDetail,
        openModal,
        modalOpen,
        modalProduct,
        closeModal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;

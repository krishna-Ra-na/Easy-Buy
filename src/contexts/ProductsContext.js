import React, { createContext, useState } from "react";
import data from "../data";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products] = useState(data);
  // console.log(products);

  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;

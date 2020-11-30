export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
      }
      return {
        shoppingCart: [product, ...shoppingCart],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    // case "INC":
    //   product = action.product;
    //   product.qty = product.qty + 1;
    //   updatedPrice = totalPrice + product.price;
    //   updatedQty = qty + 1;
    //   index = shoppingCart.findIndex((cart) => cart.id === action.id);
    //   shoppingCart[index] = product;
    //   return {
    //     shoppingCart: [...shoppingCart],
    //     totalPrice: updatedPrice,
    //     qty: updatedQty,
    //   };

    default:
      return state;
  }
};

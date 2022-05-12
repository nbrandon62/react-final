import React, { useState, useEffect } from "react";

import { CartContext } from "../CartContext.js";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    let cartCopy = [...cart];

    const exsitingItem = cartCopy.find((obj) => obj.id === product.id);
    if (exsitingItem === undefined) {
      setCart([...cartCopy, product]);
      let cartJSON = JSON.stringify([...cartCopy, product]);
      localStorage.setItem("cart", cartJSON);
      console.log("addToCart", cartJSON);
    } else {
      console.log("here");
    }
    // else {
    //   let index = 0
    //   for(let i = 0; i < cart.length; i++){
    //     if(cart[i].id === exsitingItem.id) index = i;
    //   }

    // }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

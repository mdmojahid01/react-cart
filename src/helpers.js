// export const getCart = () => {
//   return new Promise((resolve, reject) => {
//     const cart = window.localStorage.getItem("cart");
//     resolve(cart);
//   });
// };

export const getCart = () => {
  const cart = window.localStorage.getItem("cart");

  return cart;
};

export const storeCart = (cart) => {
  window.localStorage.setItem("cart", cart);
};

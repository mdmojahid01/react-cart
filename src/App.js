import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./Assets/css/color.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { ProductContext } from "./ProductContext";
import { CartContext } from "./CartContext";
import { getCart, storeCart } from "./helpers";
import Uparrow from "./component/Uparrow";

import Img1 from "./Assets/images/products/akhrot.jpg";
import Img2 from "./Assets/images/products/almond.jpg";
import Img3 from "./Assets/images/products/chestnuts.jpg";
import Img4 from "./Assets/images/products/coconut.jpg";
import Img5 from "./Assets/images/products/kaju.jpg";
import Img6 from "./Assets/images/products/peacans.jpg";
import Img7 from "./Assets/images/products/peanut.jpg";
import Img8 from "./Assets/images/products/pine-nuts.jpg";
import Img9 from "./Assets/images/products/raisins.jpg";
import Img10 from "./Assets/images/products/sunflower-seeds.jpg";
import Img11 from "./Assets/images/products/mix-nuts.jpg";
import Img12 from "./Assets/images/products/dates.jpg";

const productlist = [
  { _id: "001", image: Img1, name: "Walnuts", price: "1399" },
  { _id: "002", image: Img2, name: "Almonds", price: "799" },
  { _id: "003", image: Img3, name: "Chestnut", price: "199" },
  { _id: "004", image: Img4, name: "Coconuts", price: "499" },
  { _id: "005", image: Img5, name: "Cashews", price: "1299" },
  { _id: "006", image: Img6, name: "Pecans", price: "999" },
  { _id: "007", image: Img7, name: "Peanuts", price: "299" },
  { _id: "008", image: Img8, name: "Pine nuts", price: "1999" },
  { _id: "009", image: Img9, name: "Raisins", price: "599" },
  { _id: "010", image: Img10, name: "Sunflower seeds", price: "999" },
  { _id: "011", image: Img11, name: "Mix-Nuts", price: "1199" },
  { _id: "012", image: Img12, name: "Dates", price: "399" },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);
function App() {
  const [products, setProducts] = useState(productlist);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = getCart();
    if (cart === null) {
      console.log(null);
    } else {
      setCart(JSON.parse(cart));
    }
  }, []);
  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);
  // ==============================================
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <RouterProvider router={router} />
        <Uparrow />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;

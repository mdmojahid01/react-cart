import { BiRupee } from "react-icons/bi";
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";

function ProductItem({ img, price, name, _id }) {
  let { cart, setCart } = useContext(CartContext);
  let [isAdded, setAdded] = useState(false);
  const addToCart = (e, product_id) => {
    let _cart = { ...cart }; // _cart = {}

    if (!_cart.items) {
      _cart.items = {}; // _cart = {items:{}}
    }

    if (_cart.items[product_id]) {
      _cart.items[product_id] += 1;
    } else {
      _cart.items[product_id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;

    setCart(_cart);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  // =============== JSX =======================
  return (
    <div className="col-md-6 col-lg-3 bg-transparent p-3">
      <div className="p-3 rounded-4 bg-custom-light">
        <div className="image-container" style={{ height: "230px" }}>
          <img
            src={img}
            className="d-block w-100 object-fit-cover rounded-4 h-100"
            alt={name}
          />
        </div>
        <h5 className="product-name text-center text-capitalize pt-3 text-c1">
          {name}
        </h5>
        <div className="row pt-2">
          <div className="col-6 flex-cr  justify-content-start">
            <h6 className="flex-cr m-0">
              <BiRupee />
              {price} /kg
            </h6>
          </div>
          <div className="col-6 flex-cr justify-content-end">
            <button
              onClick={(e) => {
                addToCart(e, _id);
              }}
              className={`btn btn-primary border-0 ${
                isAdded ? "bg-custom-dark-light" : "bg-custom-dark"
              }`}
              disabled={isAdded}
            >
              {isAdded ? "Added" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

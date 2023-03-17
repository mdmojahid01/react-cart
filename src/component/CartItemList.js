import { BiRupee } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function CartItemList({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const increamentHandle = (id) => {
    setCart((old) => {
      return {
        ...old,
        items: { ...old.items, [id]: parseInt([old.items[id]]) + 1 },
        totalItems: old.totalItems + 1,
      };
    });
  };
  const decreamentHandle = (id) => {
    if (cart.items[id] > 1) {
      setCart((old) => {
        return {
          ...old,
          items: { ...old.items, [id]: parseInt([old.items[id]]) - 1 },
          totalItems: old.totalItems - 1,
        };
      });
    }
  };
  const getSum = (price, id) => {
    return cart.items[id] * price;
  };

  const handleDelete = (id) => {
    let _cart = { ...cart };
    let quantity = _cart.items[id];
    delete _cart.items[id];
    _cart.totalItems -= quantity;
    setCart(_cart);
  };
  // ================= JSX ==========================
  return (
    <div className="cart-item row py-3 mb-3 rounded-3 bg-custom-light">
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-8  flex-cc flex-md-row justify-content-md-start">
            <div className="image-con me-md-4 " style={{ width: "100px" }}>
              <img
                src={product.image}
                className="d-block rounded-3 w-100"
                alt=""
              />
            </div>
            <h5 className="text-c1 my-2">{product.name}</h5>
          </div>
          <div className="col-md-4 flex-cr py-1 py-md-0">
            <button
              onClick={() => {
                decreamentHandle(product._id);
              }}
              className="btn border-0 px-1"
              title="decrease item"
            >
              <AiFillMinusCircle className="h2 m-0 text-c3" />
            </button>
            <button className="btn border-0 px-1" disabled>
              <span className="h3 m-0">{cart.items[product._id]}</span>
            </button>
            <button
              onClick={() => {
                increamentHandle(product._id);
              }}
              className="btn border-0 px-1"
              title="increase item"
            >
              <AiFillPlusCircle className="h2 m-0 text-c3" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4 flex-cr">
        <div className="row w-100 flex-cr">
          <div className="col-6 flex-cr justify-content-start">
            <BiRupee /> {getSum(product.price, product._id)}
            {/* {product.price} */}
          </div>
          <div className="col-6 d-flex justify-content-md-center justify-content-end ">
            <button
              onClick={() => {
                handleDelete(product._id);
              }}
              className="btn text-danger p-1 m-0"
              title="delete item from cart"
            >
              <TiDelete className="h1 m-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemList;
